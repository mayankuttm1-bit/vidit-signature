/**
 * Vidit Signature - 25-Acre Futuristic Luxury Township
 * Main Application Script: Interactivity, Calculator, Forms, Animations
 */

document.addEventListener('DOMContentLoaded', function () {
    initFeaturedPlots();
    initHeroSearch();
    initEMICalculator();
    initContactForms();
    initFAQ();
    initCounters();
    initScrollReveal();
    initBrochureModal();
    initMasterPlanInteractivity();
});

// Toast Notification System
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' 
        ? `<svg class="text-brass" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg class="text-red-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Render Featured Plots on Homepage
function initFeaturedPlots() {
    const container = document.getElementById('featured-plots-container');
    if (!container || typeof VIDIT_PLOTS === 'undefined') return;

    // Show top 4 flagship plots
    const featured = VIDIT_PLOTS.slice(0, 4);
    container.innerHTML = featured.map((p, idx) => createPlotCardHTML(p, idx)).join('');
    setTimeout(initScrollReveal, 60);
}

// Hero Quick Search Form Logic
function initHeroSearch() {
    const searchForm = document.getElementById('hero-quick-search');
    if (!searchForm) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const tier = document.getElementById('search-plot-size')?.value || 'all';
        const phase = document.getElementById('search-plot-phase')?.value || 'all';
        const budget = document.getElementById('search-plot-budget')?.value || 'all';

        // Redirect to plots.html with query parameters
        window.location.href = `plots.html?tier=${encodeURIComponent(tier)}&phase=${encodeURIComponent(phase)}&budget=${encodeURIComponent(budget)}`;
    });
}

// EMI Loan Calculator with Interactive Sliders
function initEMICalculator() {
    const amountSlider = document.getElementById('emi-amount');
    const interestSlider = document.getElementById('emi-interest');
    const tenureSlider = document.getElementById('emi-tenure');

    const amountDisplay = document.getElementById('emi-amount-val');
    const interestDisplay = document.getElementById('emi-interest-val');
    const tenureDisplay = document.getElementById('emi-tenure-val');

    const monthlyEmiDisplay = document.getElementById('emi-monthly-result');
    const totalInterestDisplay = document.getElementById('emi-total-interest');
    const totalPayableDisplay = document.getElementById('emi-total-payable');

    if (!amountSlider || !interestSlider || !tenureSlider) return;

    function calculate() {
        const P = parseFloat(amountSlider.value);
        const annualRate = parseFloat(interestSlider.value);
        const N = parseFloat(tenureSlider.value) * 12; // tenure in months

        const r = annualRate / 12 / 100; // monthly interest rate

        let emi = 0;
        if (r > 0) {
            emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
        } else {
            emi = P / N;
        }

        const totalPayable = emi * N;
        const totalInterest = totalPayable - P;

        if (amountDisplay) amountDisplay.textContent = '₹ ' + (P / 100000).toFixed(1) + ' Lakhs';
        if (interestDisplay) interestDisplay.textContent = annualRate.toFixed(1) + ' %';
        if (tenureDisplay) tenureDisplay.textContent = (N / 12) + ' Years';

        if (monthlyEmiDisplay) monthlyEmiDisplay.textContent = '₹ ' + Math.round(emi).toLocaleString('en-IN');
        if (totalInterestDisplay) totalInterestDisplay.textContent = '₹ ' + Math.round(totalInterest).toLocaleString('en-IN');
        if (totalPayableDisplay) totalPayableDisplay.textContent = '₹ ' + Math.round(totalPayable).toLocaleString('en-IN');
    }

    amountSlider.addEventListener('input', calculate);
    interestSlider.addEventListener('input', calculate);
    tenureSlider.addEventListener('input', calculate);

    calculate(); // Initial calculation run
}

// Universal Contact & Site Visit Booking Forms
function initContactForms() {
    const forms = document.querySelectorAll('.vidit-inquiry-form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = form.querySelector('[name="name"]')?.value || 'Valued Visitor';
            const phone = form.querySelector('[name="phone"]')?.value || 'Not provided';
            const plotSize = form.querySelector('[name="plot_size"]')?.value || 'General Plot Inquiry';
            const visitDate = form.querySelector('[name="visit_date"]')?.value || 'Earliest Convenient Date';
            const message = form.querySelector('[name="message"]')?.value || 'I would like to explore Vidit Signature township plots & book a site visit.';

            showToast('Thank you! Opening WhatsApp to connect with Vidit Signature team...');

            const waText = encodeURIComponent(
                `*New Site Visit Inquiry - Vidit Signature*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n` +
                `*Preferred Plot Size:* ${plotSize}\n` +
                `*Planned Visit Date:* ${visitDate}\n` +
                `*Message / Requirement:* ${message}\n\n` +
                `Please share the master layout brochure and arrange transport / site coordination.`
            );

            const waUrl = `https://wa.me/916262190000?text=${waText}`;

            setTimeout(() => {
                window.open(waUrl, '_blank');
                form.reset();
            }, 1000);
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const header = item.querySelector('.faq-question');
        if (!header) return;

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all
            items.forEach(other => {
                other.classList.remove('active');
                const content = other.querySelector('.faq-answer');
                if (content) content.style.maxHeight = null;
                const icon = other.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('active');
                const content = item.querySelector('.faq-answer');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Animated Statistics Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute('data-target') || '0');
                const suffix = entry.target.getAttribute('data-suffix') || '';
                const isDecimal = target % 1 !== 0;
                let current = 0;
                const steps = 40;
                const increment = target / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = (isDecimal ? target.toFixed(1) : Math.round(target)) + suffix;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
                    }
                }, 30);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Universal Scroll Reveal Observer
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    if (!revealElements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// Brochure Download Modal
function initBrochureModal() {
    const brochureModal = document.getElementById('brochure-modal');
    const openBtns = document.querySelectorAll('.btn-download-brochure');
    const closeBtn = document.getElementById('brochure-modal-close');
    const form = document.getElementById('brochure-form');

    if (!brochureModal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            brochureModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        brochureModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    brochureModal.addEventListener('click', (e) => {
        if (e.target === brochureModal) closeModal();
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('[name="name"]')?.value || 'Client';
            const phone = form.querySelector('[name="phone"]')?.value || '';

            showToast(`Thank you ${name}! Sending official 25-Acre Master Brochure to your WhatsApp...`);

            const waText = encodeURIComponent(
                `*Request for Vidit Signature Township Brochure*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n\n` +
                `Kindly share the official 25-Acre Master Plan & Phase I / II plot pricing PDF.`
            );

            setTimeout(() => {
                window.open(`https://wa.me/916262190000?text=${waText}`, '_blank');
                closeModal();
                form.reset();
            }, 1000);
        });
    }
}

// Interactive Master Plan Zone Clicks
function initMasterPlanInteractivity() {
    const zones = document.querySelectorAll('.plan-zone');
    const infoTitle = document.getElementById('plan-zone-title');
    const infoDesc = document.getElementById('plan-zone-desc');
    const infoAction = document.getElementById('plan-zone-action');

    if (!zones.length || !infoTitle || !infoDesc) return;

    zones.forEach(zone => {
        zone.addEventListener('mouseenter', () => {
            const title = zone.getAttribute('data-title');
            const desc = zone.getAttribute('data-desc');
            const link = zone.getAttribute('data-link') || 'plots.html';

            infoTitle.textContent = title;
            infoDesc.textContent = desc;
            if (infoAction) infoAction.href = link;
        });

        zone.addEventListener('click', () => {
            const link = zone.getAttribute('data-link') || 'plots.html';
            window.location.href = link;
        });
    });
}
