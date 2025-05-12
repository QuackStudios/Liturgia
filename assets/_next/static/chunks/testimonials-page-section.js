(function () {
    const testimonials = {
        schools: [
            { quote: "Liturgia, is such an intuitive platform. When preparing a liturgy, it gives me flexibility to freely customise the celebration, whilst keeping it valid and licit because of the Church approved structure, words and prayers provided. I recommend it to anyone preparing a liturgy!", name: "Assistant Principal - Religious Education at St Stephen’s School, Algester, Archdiocese of Brisbane" },
            { quote: "I rely on Liturgia constantly for planning and preparing liturgies in my work. With so many resources just one click away, it makes checking facts, finding readings, preparing liturgy or locating that elusive prayer simple and seamless!", name: "Staff Campus Pastoral Associate, Australian Catholic University" },
            { quote: "Liturgia has many readily-accessible resources for my classroom practice and makes preparation of a Mass or Liturgy of the Word so much easier. A few clicks on the website and Liturgia produces a well-presented word document or PowerPoint for use. There are many libraries of resources to explore!", name: "Classroom teacher, Archdiocese of Brisbane" },
            { quote: "I have been using Liturgia for several years now. I find it very comprehensive and very easy to navigate. I especially appreciate the copyright attributions that accompany hymns and the fact that these citations are personalised to our organisation.", name: "Mission & Ministries Manager, North Sydney" }
        ],
        parishes: [
            { quote: "With a few clicks of the mouse, I can browse through various options available and insert texts into booklets and presentations which look professional and are easy to use in liturgical celebrations. Liturgia has made my ministry of liturgical preparation much smoother and simpler than before with its easy-to-use and straightforward approach.", name: "Father Michael, Sacred Heart Parish" },
            { quote: "This event masterfully reignited a sense of vibrant community and shared purpose that we've been longing for. We've already seen a significant boost in Mass attendance and participation in parish ministries, which is a testament to its powerful impact.", name: "Deacon Alistair, St. Peter's Church" },
            { quote: "The response from our congregation was overwhelmingly positive—many shared that it was the most impactful and spiritually enriching event our parish has hosted in years. It provided practical wisdom and deep spiritual nourishment for all ages.", name: "Mrs. Elena Rodriguez, Our Lady of Grace Parish Council" },
            { quote: "A truly uplifting experience that brought a fresh perspective to our faith journey. The speakers were engaging, relatable, and deeply authentic, making complex theological concepts accessible and relevant to everyday life. Our parish feels revitalized.", name: "Mr. John B., St. Paul's Community" }
        ],
        organizations: [
            { quote: "The parish team and I rely on Liturgia constantly for promptly preparing weekly liturgies, assisting couples to prepare weddings and families to prepare funerals, and to guide school staff in preparing school Masses. It is an intuitive, powerful, Australian tool that puts all you need at your fingertips and saves many hours in preparation time.", name: "Pastoral Coordinator, Holy Trinity Parish, Bentleigh, and Music Leader, St Mary’s, Bairnsdale, Victoria" },
            { quote: "Liturgia has been indispensable as I prepare liturgies for plenary meetings of the bishops and for keeping on top of the details of the ordo to inform the rest of my work. It’s an essential resource that makes work that used to take hours a breeze.", name: "Executive Secretary for Liturgy, Australian Catholic Bishops Conference" },
            { quote: "I use Liturgia as a resource for my students studying liturgy and sacraments. They have instant access to the current rites of the Church for analysis and reflection, and in their journey of learning the fundamentals of liturgy preparation.", name: "Senior Lecturer in Liturgical Studies and Sacramental Theology, Australian Catholic University" },
            { quote: "Liturgia provides an invaluable resource for accessing liturgical texts, rites, readings and even homily notes. It is easy to navigate and provides the individual with stress-free guidelines and assistance for liturgy planning. Thoroughly recommended.", name: "Pastoral Assistant in the Brisbane Archdiocese" }
        ]
    };

    const createCarouselSection = (title, originalItems, icon) => {
        const container = document.createElement('section');
        container.className = 'testimonial-section';
        const sectionType = title.toLowerCase().includes('schools') ? 'schools' :
            title.toLowerCase().includes('parishes') ? 'parishes' : 'organizations';
        container.setAttribute('data-icon-type', sectionType);

        const heading = document.createElement('h2');
        heading.className = 'testimonial-section__title';
        heading.textContent = title;
        container.appendChild(heading);

        const carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'testimonial-carousel__wrapper';

        const track = document.createElement('div');
        track.className = 'testimonial-carousel__track';

        const numOriginalItems = originalItems.length;
        const numClonesEachSide = numOriginalItems > 1 ? Math.min(2, numOriginalItems) : 0;

        let itemsToDisplay = [...originalItems];
        if (numOriginalItems > 1 && numClonesEachSide > 0) {
            const clonesStart = originalItems.slice(0, numClonesEachSide).map(item => ({ ...item, isClone: true }));
            const clonesEnd = originalItems.slice(numOriginalItems - numClonesEachSide).map(item => ({ ...item, isClone: true }));
            itemsToDisplay = [...clonesEnd, ...originalItems, ...clonesStart];
        }

        itemsToDisplay.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'testimonial-carousel__card';
            card.innerHTML = `
                <div class="testimonial-card__content">
                    <div class="testimonial-card__icon">${icon}</div>
                    <p class="testimonial-card__quote">"${item.quote}"</p>
                    <p class="testimonial-card__name">- ${item.name}</p>
                </div>
            `;
            track.appendChild(card);
        });

        carouselWrapper.appendChild(track);
        const controls = document.createElement('div');
        controls.className = 'testimonial-carousel__controls';
        const leftArrow = document.createElement('button');
        leftArrow.innerHTML = '&lt;';
        leftArrow.className = 'testimonial-carousel__button testimonial-carousel__button--prev';
        const rightArrow = document.createElement('button');
        rightArrow.innerHTML = '&gt;';
        rightArrow.className = 'testimonial-carousel__button testimonial-carousel__button--next';

        if (numOriginalItems > 1) {
            controls.appendChild(leftArrow);
            controls.appendChild(rightArrow);
        }

        let actualCurrentIndex = numClonesEachSide + (numOriginalItems > 0 ? Math.floor(numOriginalItems / 2) : 0);
        let isTransitioning = false;

        const updateCarousel = (targetIndex, animate = true) => {
            if (animate && isTransitioning) {
                return;
            }
            if (animate) {
                isTransitioning = true;
            }

            const allCards = Array.from(track.children);
            if (!allCards.length || targetIndex < 0 || targetIndex >= allCards.length) {
                if (animate) isTransitioning = false;
                return;
            }

            const cardElement = allCards[targetIndex];
            const offset = -cardElement.offsetLeft + (carouselWrapper.offsetWidth - cardElement.offsetWidth) / 2;

            if (!animate) {
                track.style.transition = 'none';
                allCards.forEach(card => card.style.transition = 'none');
                track.style.transform = `translateX(${offset}px)`;
                allCards.forEach((card, i) => {
                    card.classList.remove('active', 'semi-active-left', 'semi-active-right');
                    if (i === targetIndex) card.classList.add('active');
                    else if (i === targetIndex - 1) card.classList.add('semi-active-left');
                    else if (i === targetIndex + 1) card.classList.add('semi-active-right');
                });
                let dummy = track.offsetHeight;
                requestAnimationFrame(() => {
                    track.style.transition = '';
                    allCards.forEach(card => card.style.transition = '');
                    isTransitioning = false;
                });
            } else {
                allCards.forEach(card => card.style.transition = '');
                track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
                track.style.transform = `translateX(${offset}px)`;
                allCards.forEach((card, i) => {
                    card.classList.remove('active', 'semi-active-left', 'semi-active-right');
                    if (i === targetIndex) card.classList.add('active');
                    else if (i === targetIndex - 1) card.classList.add('semi-active-left');
                    else if (i === targetIndex + 1) card.classList.add('semi-active-right');
                });
            }
        };

        if (numOriginalItems > 1) {
            leftArrow.onclick = () => {
                if (isTransitioning) return;
                actualCurrentIndex--;
                updateCarousel(actualCurrentIndex, true);
            };
            rightArrow.onclick = () => {
                if (isTransitioning) return;
                actualCurrentIndex++;
                updateCarousel(actualCurrentIndex, true);
            };

            track.addEventListener('transitionend', (event) => {
                if (event.target !== track || event.propertyName !== 'transform' || !isTransitioning) {
                    return;
                }
                let jumped = false;
                if (numClonesEachSide > 0) {
                    if (actualCurrentIndex < numClonesEachSide) {
                        actualCurrentIndex += numOriginalItems;
                        updateCarousel(actualCurrentIndex, false);
                        jumped = true;
                    } else if (actualCurrentIndex >= numClonesEachSide + numOriginalItems) {
                        actualCurrentIndex -= numOriginalItems;
                        updateCarousel(actualCurrentIndex, false);
                        jumped = true;
                    }
                }
                if (!jumped) {
                    isTransitioning = false;
                }
            });
        }

        let resizeTimeout;
        const observerResize = new ResizeObserver(() => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => updateCarousel(actualCurrentIndex, false), 100);
        });
        observerResize.observe(carouselWrapper);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => updateCarousel(actualCurrentIndex, false));
        });

        container.appendChild(carouselWrapper);
        container.appendChild(controls);
        return container;
    };

    const mainObserver = new MutationObserver(() => {
        // Header element for testimonial injection AND class modification
        const headerElement = document.querySelector('header.r-pt-\\[5\\.375\\].mb-\\[3\\.75rem\\].sm\\:r-mb-\\[7\\.5\\]');

        // Testimonial injection logic
        if (headerElement && !document.querySelector('.testimonials-main-wrapper')) {
            const testimonialsWrapper = document.createElement('div');
            testimonialsWrapper.className = 'testimonials-main-wrapper';
            testimonialsWrapper.appendChild(createCarouselSection('From Schools', testimonials.schools, '🏫'));
            testimonialsWrapper.appendChild(createCarouselSection('From Parishes', testimonials.parishes, '⛪'));
            testimonialsWrapper.appendChild(createCarouselSection('From Organisations', testimonials.organizations, '💼'));
            headerElement.insertAdjacentElement('afterend', testimonialsWrapper);
        }

        // Header class modification logic
        if (headerElement && !headerElement.classList.contains('height-colour-fix')) {
            headerElement.classList.add('height-colour-fix');
        }

        // Footer modification logic
        const footerElement = document.querySelector('footer.overflow-hidden.dark-footer.bg-forest.text-white.r-mt-\\[12\\.5\\]');
        if (footerElement && !footerElement.classList.contains('margin-none')) {
            footerElement.classList.add('margin-none');
        }
    });

    mainObserver.observe(document.body, { childList: true, subtree: true });
})();