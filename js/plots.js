/**
 * Vidit Signature - 25-Acre Futuristic Luxury Township
 * Plot Inventory Data & Interactive Filter Engine
 */

const VIDIT_PLOTS = [
    {
        id: "vs-p1-01",
        title: "Grand Boulevard Luxury Villa Plot",
        plotNo: "Plot #104, Block-A",
        phase: "Phase I (Ready to Move)",
        phaseKey: "phase-1",
        sizeTier: "grand",
        areaSqFt: 2266,
        areaFormatted: "2,266 Sq. Ft. (50 × 45.3 ft)",
        facing: "East Facing (100% Vastu)",
        roadWidth: "40 Ft Wide Concrete Boulevard",
        price: "₹ 38.50 Lakhs",
        priceNumeric: 3850000,
        ratePerSqFt: "₹ 1,699 / Sq. Ft.",
        possession: "Immediate Registry & Handover",
        badge: "Flagship Estate",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
        ],
        description: "The crown jewel of Vidit Signature Phase I. Spanning 2,266 sq. ft. on the 40-foot main entrance boulevard, this grand estate plot is engineered for an imposing private villa or multi-level duplex. Overlooks manicured roadside palm avenues and enjoys prime proximity to the Chintamani Hanuman Mandir.",
        highlights: [
            "Frontage onto 40-ft wide concrete boulevard",
            "Underground electric cabling & high-speed optic fiber",
            "Direct piped drinking water line & dual drainage",
            "Immediate Tehsil registry & mutation (Namantaran)",
            "Approved for custom G+2 villa architecture"
        ]
    },
    {
        id: "vs-p1-02",
        title: "Parkside Executive Villa Plot",
        plotNo: "Plot #52, Block-B",
        phase: "Phase I (Ready to Move)",
        phaseKey: "phase-1",
        sizeTier: "medium",
        areaSqFt: 1500,
        areaFormatted: "1,500 Sq. Ft. (30 × 50 ft)",
        facing: "North-East Facing (Ishan Kona)",
        roadWidth: "30 Ft Wide Internal Avenue",
        price: "₹ 26.25 Lakhs",
        priceNumeric: 2625000,
        ratePerSqFt: "₹ 1,750 / Sq. Ft.",
        possession: "Ready for Construction",
        badge: "Park Facing",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Positioned directly opposite the central floral gardens and children's swing park in Phase I. Perfect 30x50 dimensions ideal for a modern 4-BHK duplex villa with private lawn, stilt parking, and sunlit morning terraces.",
        highlights: [
            "Unobstructed views of 2-acre central park",
            "Underground sewage & storm water channels",
            "Pre-installed LED decorative street lamps",
            "SBI & HDFC Home Loan pre-approved up to 80%",
            "24/7 CCTV surveillance zone"
        ]
    },
    {
        id: "vs-p2-01",
        title: "Spiritual Sanctuary Hillview Plot",
        plotNo: "Plot #208, Hillside Enclave",
        phase: "Phase II (Futuristic Township)",
        phaseKey: "phase-2",
        sizeTier: "medium",
        areaSqFt: 1200,
        areaFormatted: "1,200 Sq. Ft. (30 × 40 ft)",
        facing: "East Facing",
        roadWidth: "30 Ft Wide Paved Street",
        price: "₹ 19.80 Lakhs",
        priceNumeric: 1980000,
        ratePerSqFt: "₹ 1,650 / Sq. Ft.",
        possession: "Possession Dec 2026",
        badge: "Temple Proximity",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Situated in the tranquil hilltop enclave within gentle walking distance of the 12-foot black granite Chintamani Hanuman Mandir and peaceful Goshala cow sanctuary. Serene morning aarti chants, pure breeze, and pristine green surroundings.",
        highlights: [
            "Walking distance to Chintamani Hanuman Mandir & Goshala",
            "Elevated natural topography with zero waterlogging",
            "Underground utility trenches planned",
            "Flexible interest-free milestone payment plan",
            "RERA registered Phase II development"
        ]
    },
    {
        id: "vs-p1-03",
        title: "Prime Corner Boulevard Plot",
        plotNo: "Plot #18, Block-C (Corner)",
        phase: "Phase I (Ready to Move)",
        phaseKey: "phase-1",
        sizeTier: "grand",
        areaSqFt: 1800,
        areaFormatted: "1,800 Sq. Ft. (40 × 45 ft)",
        facing: "North-East Corner (Dual Frontage)",
        roadWidth: "Dual 30 Ft & 40 Ft Avenues",
        price: "₹ 32.40 Lakhs",
        priceNumeric: 3240000,
        ratePerSqFt: "₹ 1,800 / Sq. Ft.",
        possession: "Immediate Registry",
        badge: "Dual Corner Frontage",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Rare dual-frontage corner plot offering unmatched architectural freedom, cross-ventilation, and maximum natural illumination. Allows separate entrances for personal residence and home office or duplex suites.",
        highlights: [
            "Dual-side road access for dual entry gates",
            "Optimum sunlight from North & East exposures",
            "Demarcated with concrete boundary pillars",
            "Direct access to Patan Bypass exit gate",
            "100% legal clearance verified by revenue team"
        ]
    },
    {
        id: "vs-p2-02",
        title: "Modern Duplex Villa Plot",
        plotNo: "Plot #145, Block-D",
        phase: "Phase II (Futuristic Township)",
        phaseKey: "phase-2",
        sizeTier: "medium",
        areaSqFt: 1000,
        areaFormatted: "1,000 Sq. Ft. (25 × 40 ft)",
        facing: "East Facing",
        roadWidth: "30 Ft Wide RCC Paved Road",
        price: "₹ 16.50 Lakhs",
        priceNumeric: 1650000,
        ratePerSqFt: "₹ 1,650 / Sq. Ft.",
        possession: "Possession Late 2026",
        badge: "High Demand",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Highly sought-after 1,000 sq. ft. plot format specifically calibrated for smart 3-BHK duplex villa layouts. Located near the upcoming Club Signature, jogging track, and open-air theater.",
        highlights: [
            "Short walk to Signature Clubhouse & Gym",
            "Optimum 25 ft frontage for double car port",
            "Pre-laid underground sewage connection",
            "Attractive construction-linked installment plan",
            "High appreciation corridor on MP SH 37"
        ]
    },
    {
        id: "vs-p1-04",
        title: "Smart Compact Villa Plot",
        plotNo: "Plot #77, Block-E",
        phase: "Phase I (Ready to Move)",
        phaseKey: "phase-1",
        sizeTier: "compact",
        areaSqFt: 800,
        areaFormatted: "800 Sq. Ft. (20 × 40 ft)",
        facing: "North Facing",
        roadWidth: "30 Ft Wide Paved Road",
        price: "₹ 13.60 Lakhs",
        priceNumeric: 1360000,
        ratePerSqFt: "₹ 1,700 / Sq. Ft.",
        possession: "Immediate Registry",
        badge: "Budget Friendly",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Ideal for first-time homebuilders seeking a secure, gated township lifestyle in Jabalpur. Easily accommodates an efficient 2-to-3 BHK independent villa with private covered parking and rooftop terrace.",
        highlights: [
            "Low overall ticket size with luxury township benefits",
            "Complete access to all 25-acre township amenities",
            "Full demarcation and ready for immediate registry",
            "Easy bank financing available",
            "Close to community security post"
        ]
    },
    {
        id: "vs-p2-03",
        title: "Studio & Compact Villa Plot",
        plotNo: "Plot #92, Garden Row",
        phase: "Phase II (Futuristic Township)",
        phaseKey: "phase-2",
        sizeTier: "compact",
        areaSqFt: 600,
        areaFormatted: "600 Sq. Ft. (20 × 30 ft)",
        facing: "East Facing",
        roadWidth: "30 Ft Wide Street",
        price: "₹ 9.90 Lakhs",
        priceNumeric: 990000,
        ratePerSqFt: "₹ 1,650 / Sq. Ft.",
        possession: "Possession Dec 2026",
        badge: "Investment Gem",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Compact 600 sq. ft. residential parcel designed for modern row villas or high-yield rental properties. High liquidity, minimal maintenance, and full access to Vidit Signature's elite lifestyle infrastructure.",
        highlights: [
            "Under ₹ 10 Lakhs budget in a luxury 25-acre gated township",
            "All underground utility connections provided",
            "Fastest capital appreciation track",
            "Assisted villa design templates available",
            "Clear title registry support"
        ]
    },
    {
        id: "vs-p1-05",
        title: "Micro Boutique Plot (Starter Plot)",
        plotNo: "Plot #112, Sunset Enclave",
        phase: "Phase I (Ready to Move)",
        phaseKey: "phase-1",
        sizeTier: "compact",
        areaSqFt: 410,
        areaFormatted: "410 Sq. Ft. (15 × 27.3 ft)",
        facing: "East Facing",
        roadWidth: "30 Ft Wide Street",
        price: "₹ 7.18 Lakhs",
        priceNumeric: 718000,
        ratePerSqFt: "₹ 1,750 / Sq. Ft.",
        possession: "Immediate Registry",
        badge: "Starting Range",
        reraApproved: true,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Vidit Signature's entry-tier compact plot configuration spanning 410 sq. ft. Built to empower young professionals and families to step into township land ownership with zero compromise on luxury security, temple access, and roads.",
        highlights: [
            "Most accessible entry point into Vidit Signature",
            "Full township membership & clubhouse privileges",
            "Demarcated with corner markers",
            "Immediate possession & registry available",
            "15 mins from Jabalpur City hospitals"
        ]
    }
];

// Helper: Generate Plot Card HTML
function createPlotCardHTML(plot, index = 0) {
    const staggerClass = `stagger-${(index % 4) + 1}`;
    return `
    <article class="plot-card reveal ${staggerClass}" data-id="${plot.id}">
        <div class="plot-img-container">
            <img src="${plot.image}" alt="${plot.title} at Vidit Signature Jabalpur" class="plot-img" loading="lazy">
            <span class="plot-badge">${plot.badge}</span>
            <span class="plot-rera-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                RERA Approved
            </span>
        </div>
        
        <div class="plot-body">
            <div class="flex items-center justify-between text-xs text-ink-muted mb-1">
                <span class="font-bold text-emerald-light uppercase tracking-wider">${plot.phase}</span>
                <span class="bg-stone-100 px-2 py-0.5 rounded font-mono text-gray-700">${plot.plotNo}</span>
            </div>
            
            <h3 class="text-lg font-bold font-display text-ink mb-1 hover:text-emerald transition cursor-pointer" onclick="openPlotModal('${plot.id}')">
                ${plot.title}
            </h3>
            
            <p class="text-xs text-ink-muted line-clamp-2 mb-3">
                ${plot.description}
            </p>

            <div class="plot-specs">
                <div class="spec-item">
                    <span class="text-[10px] uppercase tracking-wider text-gray-500">Plot Area</span>
                    <span class="spec-val">${plot.areaSqFt} Sq. Ft.</span>
                </div>
                <div class="spec-item">
                    <span class="text-[10px] uppercase tracking-wider text-gray-500">Facing</span>
                    <span class="spec-val">${plot.facing.split(' ')[0]}</span>
                </div>
                <div class="spec-item">
                    <span class="text-[10px] uppercase tracking-wider text-gray-500">Road</span>
                    <span class="spec-val">${plot.roadWidth.split(' ')[0]} Ft</span>
                </div>
            </div>

            <div class="mt-auto pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                    <div class="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Starting Price</div>
                    <div class="plot-price">${plot.price}</div>
                </div>
                
                <div class="flex items-center gap-2">
                    <button type="button" onclick="openPlotModal('${plot.id}')" class="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-ink rounded text-xs font-semibold transition" title="View Specifications">
                        Details
                    </button>
                    <a href="https://wa.me/916262190000?text=${encodeURIComponent(`Hello Vidit Signature Team, I am interested in ${plot.title} (${plot.plotNo}, ${plot.areaFormatted}, ${plot.price}). Please share brochure and schedule a site visit.`)}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-whatsapp hover:bg-whatsapp-dark text-white rounded text-xs font-bold shadow-sm transition flex items-center gap-1.5" title="Inquire on WhatsApp">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span>Book</span>
                    </a>
                </div>
            </div>
        </div>
    </article>
    `;
}

// Open Plot Details Modal
function openPlotModal(plotId) {
    const plot = VIDIT_PLOTS.find(p => p.id === plotId);
    if (!plot) return;

    let modal = document.getElementById('plot-detail-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'plot-detail-modal';
        modal.className = 'modal-backdrop';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-box">
            <button class="modal-close-btn" onclick="closePlotModal()" aria-label="Close dialog">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div class="relative h-64 sm:h-72 overflow-hidden rounded-t-xl bg-stone-900">
                <img src="${plot.image}" alt="${plot.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                
                <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="inline-block bg-brass/90 text-navy-dark px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-1">${plot.phase}</span>
                    <h3 class="text-xl sm:text-2xl font-bold font-display">${plot.title}</h3>
                    <p class="text-xs text-white/80">${plot.plotNo} • Near Patan Bypass, Jabalpur</p>
                </div>
            </div>

            <div class="p-6">
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                    <div>
                        <span class="text-xs uppercase text-gray-500 font-bold block">Total Price</span>
                        <span class="text-2xl font-bold text-emerald font-display">${plot.price}</span>
                        <span class="text-xs text-gray-500 block">Rate: ${plot.ratePerSqFt}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xs uppercase text-gray-500 font-bold block">Possession Status</span>
                        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-dark bg-emerald-subtle px-2.5 py-1 rounded-full">
                            <span class="w-2 h-2 rounded-full bg-emerald"></span>
                            ${plot.possession}
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-stone-100 rounded-lg mb-6 text-xs">
                    <div>
                        <span class="text-gray-500 block">Plot Dimensions</span>
                        <strong class="text-gray-900">${plot.areaFormatted}</strong>
                    </div>
                    <div>
                        <span class="text-gray-500 block">Facing / Orientation</span>
                        <strong class="text-gray-900">${plot.facing}</strong>
                    </div>
                    <div>
                        <span class="text-gray-500 block">Access Road</span>
                        <strong class="text-gray-900">${plot.roadWidth}</strong>
                    </div>
                    <div>
                        <span class="text-gray-500 block">RERA Status</span>
                        <strong class="text-green-700">RERA Registered</strong>
                    </div>
                </div>

                <h4 class="font-bold text-gray-900 text-sm mb-2 uppercase tracking-wider">About This Township Plot</h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-6">${plot.description}</p>

                <h4 class="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">Key Township Amenities Included</h4>
                <ul class="space-y-2 mb-6">
                    ${plot.highlights.map(h => `
                        <li class="flex items-start gap-2.5 text-xs text-gray-700">
                            <svg class="text-brass flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>${h}</span>
                        </li>
                    `).join('')}
                </ul>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-stone-200">
                    <a href="tel:+916262190000" class="flex items-center justify-center gap-2 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-gray-900 font-bold rounded-lg text-sm transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call Site Office (+91 62621 90000)
                    </a>
                    <a href="https://wa.me/916262190000?text=${encodeURIComponent(`Hello Vidit Signature, I am interested in ${plot.title} (${plot.plotNo}, ${plot.areaFormatted}, Price: ${plot.price}). Please send detailed floor plan, RERA documents, and schedule site visit.`)}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 px-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-lg text-sm shadow-md transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Book Site Visit on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closePlotModal();
    });
}

function closePlotModal() {
    const modal = document.getElementById('plot-detail-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Global escape key handler for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePlotModal();
});
