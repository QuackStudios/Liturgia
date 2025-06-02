(() => {
    console.log("[VideoSection] Self-hosted video script with audio UX loaded");

    const createVideoSection = () => {
        const container = document.createElement('div');
        container.id = 'dynamic-video-section';
        container.style.cssText = `
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            z-index: 0;
        `;

        const section = document.createElement('section');
        section.className = 'video-section';
        section.style.cssText = `
            width: 80vw;
            height: 80vh;
            background: black;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            transform: scale(0.9);
            transition: transform 0.1s ease-out;
            position: relative;
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
        video.src = 'assets/videos/Edited-Liturgia-Promo-Video(1).mp4';
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

        // Sleek mute overlay
        const muteOverlay = document.createElement('div');
        muteOverlay.innerHTML = `
    <svg height="48" width="48" viewBox="0 0 208.175 208.175" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g>
                <path fill="#FFFFFF" d="M0,58.432v90.817h29.3l66.291,50.079V8.847l-65.64,49.585H0z M5.411,143.841V63.84h22.744v80.002
                    H5.411z M90.18,19.712v168.746l-56.614-42.767V62.483L90.18,19.712z"/>
                <polygon fill="#FFFFFF" points="207.856,62.87 208.175,62.555 205.265,59.642 163.725,101.178 122.511,59.96 
                    122.196,59.642 119.28,62.555 160.812,104.087 119.605,145.309 119.28,145.623 122.196,148.537 163.725,107 204.943,148.218 
                    205.265,148.54 208.175,145.623 166.642,104.087"/>
            </g>
        </g>
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

        // Toggle native controls on hover
        video.addEventListener('mouseenter', () => {
            video.setAttribute('controls', '');
        });
        video.addEventListener('mouseleave', () => {
            video.removeAttribute('controls');
        });

        // Click to unmute and hide the overlay
        muteOverlay.addEventListener('click', () => {
            video.muted = false;
            video.volume = 1;
            muteOverlay.style.opacity = '0';
            setTimeout(() => muteOverlay.remove(), 300);
        });

        // DOM structure
        wrapper.appendChild(video);
        section.appendChild(wrapper);
        container.appendChild(section);
        container.appendChild(muteOverlay);

        // Attempt autoplay after DOM insertion
        setTimeout(() => {
            video.play().catch(err => {
                console.warn("[VideoSection] Autoplay failed silently:", err);
            });
        }, 0);
        observeVisibility(video);

        return { container, section };
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
                threshold: 0.25 // Only trigger when at least 25% of the video is in view
            }
        );

        observer.observe(video);
    };


    const injectVideoSection = () => {
        const beforeElement = document.getElementById('module-bcd2b578-d7a7-480e-ad87-2e0664bbbd4b');
        const afterElement = document.getElementById('module-f21ef978-28b5-4bd8-8722-d5014a692ac3');

        if (
            beforeElement &&
            afterElement &&
            beforeElement.parentNode &&
            !document.getElementById('dynamic-video-section')
        ) {
            const { container, section } = createVideoSection();
            beforeElement.parentNode.insertBefore(container, beforeElement);
            applyScrollZoomEffect(section);
            return true;
        }

        return false;
    };

    const waitForModulesAndObserve = () => {
        const observer = new MutationObserver(() => {
            const inserted = injectVideoSection();
            if (inserted) observer.disconnect();
        });

        observer.observe(document.body, { childList: true, subtree: true });
        injectVideoSection();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForModulesAndObserve);
    } else {
        waitForModulesAndObserve();
    }
})();
