// State
let allMedia = [];
let currentFilter = 'all';
let currentLanguage = 'all';
let currentSort = 'newest';
let searchQuery = '';
let selectMode = false;
let selectedItems = new Set();

// DOM Elements
const elements = {
    mediaGrid: document.getElementById('mediaGrid'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    navLinks: document.querySelectorAll('.nav-link'),
    contentTitle: document.getElementById('contentTitle'),
    menuBtn: document.getElementById('menuBtn'),
    sidebar: document.getElementById('sidebar'),
    themeBtn: document.getElementById('themeBtn'),
    logoImg: document.getElementById('logoImg'),
    videoModal: document.getElementById('videoModal'),
    modalClose: document.getElementById('modalClose'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    lightbox: document.getElementById('lightbox'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxBackdrop: document.getElementById('lightboxBackdrop'),
    selectModeBtn: document.getElementById('selectModeBtn'),
    selectionToolbar: document.getElementById('selectionToolbar'),
    selectionCount: document.getElementById('selectionCount'),
    downloadSelectedBtn: document.getElementById('downloadSelectedBtn'),
    clearSelectionBtn: document.getElementById('clearSelectionBtn'),
    resourceCounts: document.getElementById('resourceCounts'),
    languageFilter: document.getElementById('languageFilter'),
    sortBy: document.getElementById('sortBy'),
    contributeBtn: document.getElementById('contributeBtn'),
    contributeModal: document.getElementById('contributeModal'),
    contributeClose: document.getElementById('contributeClose'),
    contributeBackdrop: document.getElementById('contributeBackdrop'),
    contributeForm: document.getElementById('contributeForm'),
    cancelContribute: document.getElementById('cancelContribute')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeSidebarState();
    loadMedia();
    setupEventListeners();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    elements.logoImg.src = 'assets/polkadot-brand-assets/dark.svg';
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    document.body.classList.remove('dark-mode');
    elements.logoImg.src = 'assets/polkadot-brand-assets/light.svg';
    localStorage.setItem('theme', 'light');
}

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

// Load Media Data
async function loadMedia() {
    try {
        const response = await fetch('content.json');
        allMedia = await response.json();
        updateResourceCounts();
        renderMedia();
    } catch (error) {
        console.error('Error loading media:', error);
        showError('Failed to load media content. Please try again later.');
    }
}

// Update Resource Count Cards
function updateResourceCounts() {
    const videosCount = allMedia.filter(item => item.type === 'video').length;
    const imagesCount = allMedia.filter(item => item.type === 'image').length;

    elements.resourceCounts.innerHTML = `
        <div class="resource-count-card">
            <svg class="resource-count-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            <span class="resource-count-label">Videos</span>
            <span class="resource-count-number">${videosCount}</span>
        </div>
        <div class="resource-count-card">
            <svg class="resource-count-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span class="resource-count-label">Images</span>
            <span class="resource-count-number">${imagesCount}</span>
        </div>
    `;
}

// Render Media Grid
function renderMedia() {
    let filteredMedia = allMedia.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.type === currentFilter;
        const matchesSearch = searchQuery === '' ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

        // Language filter - only apply to videos
        let matchesLanguage = true;
        if (currentLanguage !== 'all' && item.type === 'video') {
            matchesLanguage = item.language === currentLanguage;
        }

        return matchesFilter && matchesSearch && matchesLanguage;
    });

    // Sort the filtered media
    filteredMedia = sortMedia(filteredMedia);

    if (filteredMedia.length === 0) {
        elements.mediaGrid.style.display = 'none';
        elements.emptyState.style.display = 'block';
        return;
    }

    elements.mediaGrid.style.display = 'grid';
    elements.emptyState.style.display = 'none';
    elements.mediaGrid.innerHTML = '';

    filteredMedia.forEach(item => {
        const card = createMediaCard(item);
        elements.mediaGrid.appendChild(card);
    });
}

// Sort Media
function sortMedia(media) {
    const sorted = [...media];

    switch (currentSort) {
        case 'newest':
            // Sort by upload date (newest first) - for videos with dates
            sorted.sort((a, b) => {
                const dateA = a.uploadDate || '0';
                const dateB = b.uploadDate || '0';
                return dateB.localeCompare(dateA);
            });
            break;

        case 'oldest':
            // Sort by upload date (oldest first)
            sorted.sort((a, b) => {
                const dateA = a.uploadDate || '9999-99-99';
                const dateB = b.uploadDate || '9999-99-99';
                return dateA.localeCompare(dateB);
            });
            break;

        case 'title':
            // Sort by title (A-Z)
            sorted.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
            break;
    }

    return sorted;
}

// Create Media Card
function createMediaCard(item) {
    const card = document.createElement('div');
    card.className = `media-card ${item.type === 'image' ? 'image-card' : ''} ${selectMode ? 'select-mode' : ''}`;
    card.dataset.itemId = item.id;

    let mediaUrl, thumbnailUrl;

    if (item.source === 'local') {
        mediaUrl = item.url;
        thumbnailUrl = item.url;
    } else {
        mediaUrl = `https://archive.org/download/${item.archiveId}/${encodeURIComponent(item.filename)}`;
        thumbnailUrl = mediaUrl;
    }

    let thumbnailHTML = '';
    if (item.type === 'video') {
        thumbnailHTML = `
            <video preload="metadata" muted>
                <source src="${mediaUrl}#t=0.1" type="video/mp4">
            </video>
            <div class="media-overlay">
                <div class="play-icon">
                    <svg viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
            </div>
        `;
    } else {
        thumbnailHTML = `<img src="${thumbnailUrl}" alt="${item.title}" loading="lazy">`;
    }

    const isSelected = selectedItems.has(item.id);

    card.innerHTML = `
        <div class="select-checkbox ${isSelected ? 'checked' : ''}" data-item-id="${item.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <div class="media-thumbnail">
            ${thumbnailHTML}
        </div>
        <div class="media-info">
            <h3 class="media-title">${item.title}</h3>
            <div class="media-meta">
                <span class="media-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${item.type === 'video' ?
                            '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>' :
                            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>'
                        }
                    </svg>
                    ${item.type === 'video' ? (item.duration || 'Video') : 'Image'}
                </span>
                <span>${item.source === 'local' ? 'Local' : 'Archive.org'}</span>
            </div>
        </div>
    `;

    // Add click handlers
    const checkbox = card.querySelector('.select-checkbox');

    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelection(item.id);
    });

    card.addEventListener('click', (e) => {
        if (selectMode) {
            toggleSelection(item.id);
        } else {
            if (item.type === 'video') {
                openVideoModal(item);
            } else {
                openLightbox(item);
            }
        }
    });

    if (isSelected) {
        card.classList.add('selected');
    }

    return card;
}

// Selection Management
function toggleSelectMode() {
    selectMode = !selectMode;

    if (selectMode) {
        elements.selectModeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Cancel Selection
        `;
    } else {
        elements.selectModeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            Select Multiple
        `;
        clearSelection();
    }

    renderMedia();
}

function toggleSelection(itemId) {
    if (selectedItems.has(itemId)) {
        selectedItems.delete(itemId);
    } else {
        selectedItems.add(itemId);
    }
    updateSelectionUI();
    renderMedia();
}

function clearSelection() {
    selectedItems.clear();
    updateSelectionUI();
    renderMedia();
}

function updateSelectionUI() {
    const count = selectedItems.size;
    elements.selectionCount.textContent = `${count} selected`;

    if (count > 0) {
        elements.selectionToolbar.style.display = 'flex';
    } else {
        elements.selectionToolbar.style.display = 'none';
    }
}

function downloadSelected() {
    const items = allMedia.filter(item => selectedItems.has(item.id));

    items.forEach((item, index) => {
        setTimeout(() => {
            const url = item.source === 'local'
                ? item.url
                : `https://archive.org/download/${item.archiveId}/${encodeURIComponent(item.filename)}`;

            const a = document.createElement('a');
            a.href = url;
            a.download = item.filename || item.title;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, index * 500); // Stagger downloads by 500ms
    });
}

// Fetch Archive.org Metadata
async function fetchArchiveMetadata(archiveId) {
    try {
        const response = await fetch(`https://archive.org/metadata/${archiveId}`);
        const data = await response.json();

        const metadata = {
            size: null,
            duration: null,
            language: null,
            date: null,
            subjects: []
        };

        // Extract file size and duration from files array
        if (data.files && data.files.length > 0) {
            const videoFile = data.files.find(f => f.format === 'MPEG4' || f.name.endsWith('.mp4'));
            if (videoFile) {
                if (videoFile.size) {
                    const sizeInMB = (parseInt(videoFile.size) / (1024 * 1024)).toFixed(1);
                    metadata.size = `${sizeInMB} MB`;
                }
                if (videoFile.length) {
                    metadata.duration = formatDuration(parseFloat(videoFile.length));
                }
            }
        }

        // Extract metadata from metadata object
        if (data.metadata) {
            metadata.language = data.metadata.language || 'Not specified';
            metadata.date = data.metadata.publicdate || data.metadata.addeddate || 'Not specified';

            // Extract subjects/topics
            if (data.metadata.subject) {
                metadata.subjects = Array.isArray(data.metadata.subject)
                    ? data.metadata.subject
                    : [data.metadata.subject];
            }
        }

        return metadata;
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return null;
    }
}

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Video Modal
async function openVideoModal(item) {
    const videoContainer = document.getElementById('videoContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const archiveLink = document.getElementById('archiveLink');
    const downloadLink = document.getElementById('downloadLink');
    const modalMetadata = document.getElementById('modalMetadata');

    const mediaUrl = item.source === 'local'
        ? item.url
        : `https://archive.org/download/${item.archiveId}/${encodeURIComponent(item.filename)}`;

    const archiveUrl = item.source === 'local'
        ? '#'
        : `https://archive.org/details/${item.archiveId}`;

    videoContainer.innerHTML = `
        <video controls autoplay>
            <source src="${mediaUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description || '';
    archiveLink.href = archiveUrl;
    downloadLink.href = mediaUrl;

    if (item.source === 'local') {
        archiveLink.style.display = 'none';
        modalMetadata.style.display = 'none';
    } else {
        archiveLink.style.display = 'inline-flex';

        // Fetch and display metadata
        modalMetadata.style.display = 'block';
        document.getElementById('metaSize').textContent = 'Loading...';
        document.getElementById('metaDuration').textContent = 'Loading...';
        document.getElementById('metaLanguage').textContent = 'Loading...';
        document.getElementById('metaDate').textContent = 'Loading...';

        const metadata = await fetchArchiveMetadata(item.archiveId);

        if (metadata) {
            document.getElementById('metaSize').textContent = metadata.size || 'N/A';
            document.getElementById('metaDuration').textContent = metadata.duration || item.duration || 'N/A';
            document.getElementById('metaLanguage').textContent = metadata.language || 'N/A';
            document.getElementById('metaDate').textContent = metadata.date || 'N/A';

            // Display tags
            const metaTags = document.getElementById('metaTags');
            metaTags.innerHTML = '';
            if (metadata.subjects && metadata.subjects.length > 0) {
                metadata.subjects.forEach(subject => {
                    const tag = document.createElement('span');
                    tag.className = 'metadata-tag';
                    tag.textContent = subject;
                    metaTags.appendChild(tag);
                });
            }
        }
    }

    elements.videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    elements.videoModal.classList.remove('active');
    document.getElementById('videoContainer').innerHTML = '';
    document.body.style.overflow = '';
}

// Image Lightbox
function openLightbox(item) {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDownload = document.getElementById('lightboxDownload');

    const imageUrl = item.source === 'local'
        ? item.url
        : `https://archive.org/download/${item.archiveId}/${encodeURIComponent(item.filename)}`;

    lightboxImg.src = imageUrl;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDownload.href = imageUrl;
    lightboxDownload.download = item.filename || item.title;

    elements.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.getElementById('lightboxImg').src = '';
    document.body.style.overflow = '';
}

// Filter Handling
function setFilter(filter) {
    currentFilter = filter;

    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.filter === filter) {
            link.classList.add('active');
        }
    });

    const titles = {
        'all': 'All Content',
        'video': 'Videos',
        'image': 'Images'
    };
    elements.contentTitle.textContent = titles[filter] || 'All Content';

    renderMedia();
}

// Search Handling
function handleSearch(query) {
    searchQuery = query;
    renderMedia();
}

// Error Display
function showError(message) {
    elements.mediaGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
            <p>${message}</p>
        </div>
    `;
}

// Language Filter
function handleLanguageFilter(language) {
    currentLanguage = language;
    renderMedia();
}

// Sort Handling
function handleSort(sortType) {
    currentSort = sortType;
    renderMedia();
}

// Contribution Modal
function openContributeModal() {
    elements.contributeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContributeModal() {
    elements.contributeModal.classList.remove('active');
    elements.contributeForm.reset();
    document.body.style.overflow = '';
}

function handleContributeSubmit(e) {
    e.preventDefault();

    const formData = new FormData(elements.contributeForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const contentType = formData.get('contentType');
    const description = formData.get('description');
    const link = formData.get('link');

    // Create mailto link with form data
    const subject = encodeURIComponent(`Content Contribution from ${name}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}
Content Type: ${contentType}
Description: ${description}
${link ? `Link: ${link}` : ''}

---
This submission was sent from the Polkadot Ecosystem Content website.`);

    const mailtoLink = `mailto:insights@palalabs.org?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Close modal
    closeContributeModal();
}

// Sidebar Toggle
function toggleSidebar() {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
        // On mobile, toggle the 'active' class to slide in/out
        elements.sidebar.classList.toggle('active');
    } else {
        // On desktop, toggle the 'collapsed' class to shrink/expand
        elements.sidebar.classList.toggle('collapsed');

        // Save state to localStorage
        const isCollapsed = elements.sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
}

// Initialize Sidebar State
function initializeSidebarState() {
    const isMobile = window.innerWidth <= 1024;

    if (!isMobile) {
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (isCollapsed) {
            elements.sidebar.classList.add('collapsed');
        }
    }
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    elements.themeBtn.addEventListener('click', toggleTheme);

    // Menu button (toggles sidebar on both desktop and mobile)
    elements.menuBtn.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!elements.sidebar.contains(e.target) && !elements.menuBtn.contains(e.target)) {
                elements.sidebar.classList.remove('active');
            }
        }
    });

    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            setFilter(link.dataset.filter);
            if (window.innerWidth <= 1024) {
                elements.sidebar.classList.remove('active');
            }
        });
    });

    // Search
    elements.searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Modal close
    elements.modalClose.addEventListener('click', closeVideoModal);
    elements.modalBackdrop.addEventListener('click', closeVideoModal);

    // Lightbox close
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightboxBackdrop.addEventListener('click', closeLightbox);

    // Selection mode
    elements.selectModeBtn.addEventListener('click', toggleSelectMode);
    elements.downloadSelectedBtn.addEventListener('click', downloadSelected);
    elements.clearSelectionBtn.addEventListener('click', clearSelection);

    // Language filter
    elements.languageFilter.addEventListener('change', (e) => {
        handleLanguageFilter(e.target.value);
    });

    // Sort
    elements.sortBy.addEventListener('change', (e) => {
        handleSort(e.target.value);
    });

    // Contribute modal
    elements.contributeBtn.addEventListener('click', openContributeModal);
    elements.contributeClose.addEventListener('click', closeContributeModal);
    elements.contributeBackdrop.addEventListener('click', closeContributeModal);
    elements.cancelContribute.addEventListener('click', closeContributeModal);
    elements.contributeForm.addEventListener('submit', handleContributeSubmit);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (selectMode) {
                toggleSelectMode();
            }
            closeVideoModal();
            closeLightbox();
            closeContributeModal();
        }
    });
}
