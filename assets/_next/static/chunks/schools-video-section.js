(() => {
    console.log("[VideoSection] Mutation observer targeting specific div loaded");

    const createVideoContent = () => {
        const section = document.createElement('section');
        section.className = 'video-section';
        section.style.cssText = `
            width: 100%;
            max-width: 85vw;
            height: 88%;
            background: black;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            transform: scale(0.96);
            transition: transform 0.1s ease-out;
            position: relative;
            margin-left: auto;
            margin-right: auto;
        `;


        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';
        wrapper.style.cssText = `
            width: 100%;
            height: 100%;
            position: relative;
            border-radius: 14px;
            overflow: hidden;
        `;

        const video = document.createElement('video');
        video.src = 'assets/videos/Edited-Liturgia-School-Video(1).mp4';
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.loop = true;

        video.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
            object-fit: cover;
            border: none;
        `;

        const muteOverlay = document.createElement('div');
        muteOverlay.innerHTML = `
            <svg height="48" width="48" viewBox="0 0 208.175 208.175" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M0,58.432v90.817h29.3l66.291,50.079V8.847l-65.64,49.585H0z M5.411,143.841V63.84h22.744v80.002
                    H5.411z M90.18,19.712v168.746l-56.614-42.767V62.483L90.18,19.712z"/>
                <polygon fill="#FFFFFF" points="207.856,62.87 208.175,62.555 205.265,59.642 163.725,101.178 122.511,59.96 
                    122.196,59.642 119.28,62.555 160.812,104.087 119.605,145.309 119.28,145.623 122.196,148.537 163.725,107 204.943,148.218 
                    205.265,148.54 208.175,145.623 166.642,104.087"/>
            </svg>
        `;
        muteOverlay.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 48px;
            background: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            z-index: 10;
            transition: opacity 0.3s ease;
        `;

        muteOverlay.addEventListener('click', () => {
            video.muted = false;
            video.volume = 1;
            muteOverlay.style.opacity = '0';
            setTimeout(() => muteOverlay.remove(), 300);
        });

        video.addEventListener('mouseenter', () => video.setAttribute('controls', ''));
        video.addEventListener('mouseleave', () => video.removeAttribute('controls'));

        wrapper.appendChild(video);
        section.appendChild(wrapper);
        section.appendChild(muteOverlay);

        observeVisibility(video);
        applyScrollZoomEffect(section);

        return section;
    };

    const applyScrollZoomEffect = (section) => {
        const easeOutHold = (x) => {
            if (x < 0.35) return 1.03;
            return 1.03 - 0.08 * ((x - 0.35) / 0.65);
        };

        const updateScale = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(windowHeight / 2 - sectionCenter);
            const maxDistance = windowHeight * 0.75;
            const normalized = Math.min(distanceFromCenter / maxDistance, 1);
            const scale = easeOutHold(normalized);
            section.style.transform = `scale(${scale.toFixed(3)})`;
            requestAnimationFrame(updateScale);
        };

        requestAnimationFrame(updateScale);
    };

    const observeVisibility = (video) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(err => console.warn("Play resume failed:", err));
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.25
            }
        );

        observer.observe(video);
    };

    const findAndReplaceTargetDiv = () => {
        const selector = '.media-wrapper.px-4.mt-\\[3\\.75rem\\].sm\\:r-mt-\\[6\\.25\\].overflow-hidden.aspect-\\[22\\.5\\/33\\].sm\\:aspect-\\[16\\/9\\].max-h-\\[80vh\\].sm\\:max-h-none.w-full.mobile-media-wrapper-adjust';
        const target = document.querySelector(selector);
        if (target && !target.dataset.replaced) {
            console.log("[VideoSection] Replacing target div content with video (with zoom effect)");
            target.style.marginTop = 'clamp(2.63rem, 3.94vw, 4.81rem)';
            target.style.paddingTop = '2rem';
            target.innerHTML = '';
            const videoSection = createVideoContent();
            target.appendChild(videoSection);
            target.dataset.replaced = 'true';
            return true;
        }
        return false;
    };

    const observeTargetDiv = () => {
        const observer = new MutationObserver(() => {
            if (findAndReplaceTargetDiv()) {
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        findAndReplaceTargetDiv();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeTargetDiv);
    } else {
        observeTargetDiv();
    }
    const adjustModuleMargin = () => {
        const module = document.getElementById('module-0fb2b836-1e77-4b41-a4bc-149d203a835e');
        if (module && !module.dataset.marginFixed) {
            module.style.marginTop = '0px';
            module.dataset.marginFixed = 'true';
            console.log('[VideoSection] Adjusted margin-top on schools module');
            return true;
        }
        return false;
    };

    const observeModuleMargin = () => {
        const observer = new MutationObserver(() => {
            if (adjustModuleMargin()) {
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        adjustModuleMargin(); // Initial attempt
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observeTargetDiv();
            observeModuleMargin(); // 👈 add this
        });
    } else {
        observeTargetDiv();
        observeModuleMargin(); // 👈 add this
    }
    const adjustHeaderSpacing = () => {
        const header = document.querySelector('header.r-pt-\\[5\\.375\\].mb-\\[3\\.75rem\\].sm\\:r-mb-\\[7\\.5\\]');
        if (header && !header.dataset.spacingFixed) {
            header.style.paddingTop = '0px';
            header.style.marginBottom = '0rem';
            header.dataset.spacingFixed = 'true';
            console.log('[VideoSection] Adjusted spacing on header');
            return true;
        }
        return false;
    };

    const observeHeaderSpacing = () => {
        const observer = new MutationObserver(() => {
            if (adjustHeaderSpacing()) {
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        adjustHeaderSpacing(); // Initial run
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observeTargetDiv();
            observeModuleMargin();
            observeHeaderSpacing(); // 👈 add this
        });
    } else {
        observeTargetDiv();
        observeModuleMargin();
        observeHeaderSpacing(); // 👈 add this
    }


})();
