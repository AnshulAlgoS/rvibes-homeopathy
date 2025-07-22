// File: src/views/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';
import logo from '../assets/logo.png';
import heroimage from '../assets/image.jpeg';
import { motion } from 'framer-motion';

// Image imports
import img1 from '../assets/jojobaranti.jpg';
import img2 from '../assets/jojobarantidandruff.jpg';
import img3 from '../assets/jojobarantipsoriasis.jpg';
import img4 from '../assets/jojobarRejuvenating.jpg';
import img5 from '../assets/jojobarAntiAging.jpg';
import img6 from '../assets/jojobardaycare.jpg';
import img7 from '../assets/femimmune.jpg';
import img8 from '../assets/dailyvita.jpg';
import img9 from '../assets/Haircaretablet.jpg';
import img10 from '../assets/ferrocell.jpg';
import img11 from '../assets/milkthistle.jpg';
import img12 from '../assets/jointeasetablet.jpg';
import img13 from '../assets/omegaplus.jpg';
import img14 from '../assets/neuroboost.jpg';
import img15 from '../assets/vitamind3.jpg';
import img16 from '../assets/livercaretablet.jpg';
import img17 from '../assets/Rpathri.jpg';
import img18 from '../assets/Likorin.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const productImages = {
    Cosmetics: [img1, img2, img3, img4, img5, img6],
    Nutraceuticals: [img7, img8, img9, img10, img11, img12, img13, img14, img15],
    Herbals: [img16, img17, img18]
};

const products = {
    Cosmetics: [
        {
            name: "Jojoba R Anti Fungal Cream",
            desc: `Jojoba R Anti-Fungal Cream is a fast-absorbing, non-greasy
emollient with anti-fungal, anti-inflammatory, and anti-
microbial properties. It helps relieve itchy, dry, cracked, or
inflamed skin while soothing conditions like eczema, dermatitis,
and fungal infections of the skin and mucous membranes. The
cream nourishes, moisturizes, and protects the skin, promoting
overall skin health and preventing further damage.`,
            ingredients: [
                "Echinacea Oil - 2%",
                "Calendula Oil - 2%",
                "Sarsaparilla Oil - 1%",
                "Thuja Extract - 1%",
                "Chaulmoogra Oil - 2%",
                "Ocimum Can Oil - 0.5%",
                "Carica Papaya - 0.5%",
                "Cream base q.s"
            ]
        }
        ,
        {
            name: "Jojoba R Anti Dandruff Shampoo",
            desc: `Jojoba R Anti-Dandruff Shampoo gently removes dandruff
while nourishing and strengthening hair roots to promote a
healthy scalp and hair growth. Enriched with natural ingredients
and active moisturizers, it targets dryness and controls
dandruff-causing microbes like Malassezia. The shampoo
soothes itching, flaking, redness, and irritation, while providing
gentle cleansing and long-lasting freshness—leaving hair soft,
shiny, and full of natural bounce.`,
            ingredients: [
                "Aloe Vera Extract",
                "Tea Tree Oil",
                "Neem Extract",
                "Lemon Oil",
                "Zinc Pyrithione",
                "Base q.s."
            ]
        }
        ,
        {
            name: "Jojoba R Anti Psoriasis Cream",
            desc: `Jojoba R Anti-Psoriasis Cream is specially formulated with Salix
alba, cranberry and raspberry seed extracts, along with organic
oils, to treat scaling and inflammation associated with psoriasis.
It provides quick relief from itching, redness, and skin build-up,
helping soothe and restore irritated skin.`,
            ingredients: [
                "Salix alba ext – 5%",
                "Echinacea ext – 3%",
                "Organic Tamanu Oil – 3%",
                "Coconut Oil – 2%",
                "Carnauba Wax – 2%",
                "Candelilla Wax – 8%",
                "Shea Butter – 5%",
                "Cocoa Butter – 2%",
                "Natural Vitamin-E – 1%",
                "Grape Seed Oil – 2%",
                "Cranberry Seed Oil – 3%",
                "Raspberry Seed Oil – 3%",
                "Jojoba Oil – 2%",
                "Argan Oil – 3%",
                "Jasmine Flower Ext – 3%",
                "Cream base qs"
            ]
        }
        ,
        {
            name: "Jojoba R Rejuvenating Face Wash",
            desc: `Jojoba R Rejuvenating Face Wash deeply cleanses the skin by
removing dirt, excess oil, and impurities, while hydrating and
soothing the face for a natural glow. Its balanced formula
combines the healing power of neem, bitter orange (for anti-
microbial and skin-brightening effects), aloe vera, cucumber,
and chandan to calm and refresh the skin. It helps reduce scars,
dark spots, acne, and dryness, making it suitable for sensitive
and eczema-prone skin.`,
            ingredients: [
                "Aloe vera (Aloe barbadensis) leaf juice – 2%",
                "Honey (Mel) – 1%",
                "Neem extract (Azadirachta indica) – 0.5%",
                "Calendula extract (Calendula officinalis) – 0.5%",
                "Cucumber extract (Cucumis sativus) – 0.5%",
                "Bitter orange peel extract (Citrus aurantium) – 0.5%",
                "Red sandalwood extract (Santalum album) – 0.1%",
                "Distilled orange blossom water (Citrus aurantium dulcis)",
                "Purified water (Aqua)"
            ]
        }
        ,
        {
            name: "Jojoba R Anti Aging Cream",
            desc: `Jojoba R Anti-Aging Cream promotes a natural glow and even
skin tone while effectively targeting pigmentation and dark
spots. Its anti-wrinkle and anti-aging properties help retain
skin’s elasticity, reduce fine lines, and improve firmness.
Suitable for all skin types, it brightens the complexion by
limiting melanin transfer and supports cell renewal for youthful,
clearer skin.`,
            ingredients: [
                "Berberis aquifolium – 6%",
                "Oleum santali – 1%",
                "Cardamom oil – 0.5%",
                "Cestrum nocturnum – 1%",
                "Arum Metalicum – 0.05%",
                "Saffron oil – 1%",
                "Jojoba Oil – 0.5%"
            ],
        }
        ,
        {
            name: "Jojoba R Day Care Cream",
            desc: `Jojoba R Day Care Cream is a multi-purpose skin cream
designed to hydrate, nourish, and protect your skin for a
healthy, radiant look. It helps prevent signs of aging, reduces
acne and blemishes, and soothes sunburn, tan, insect bites, and
minor wounds. With exfoliating and antioxidant properties, it
removes dead skin cells, neutralizes free radicals, and supports
skin renewal. The cream protects the skin's moisture barrier,
shields against harmful UV rays, and improves elasticity—
leaving your skin smooth, fresh, and glowing every day.`,
            ingredients: [
                "Jojoba Oil",
                "Glycerin mono steareth",
                "Shea Butter",
                "Cetyl Alcohol",
                "Cetyl Palmitate",
                "Almond Oil",
                "Crocus Sativa Extract",
                "Aloe Vera Extract"
            ],
        }

    ],
    Nutraceuticals: [
        { name: "RVibes Fem Immune Capsule", desc: "Strengthens women's immunity with herbal nutrition." },
        { name: "RVibes Daily Vita Plus Tablet", desc: "Daily multivitamin support for wellness." },
        { name: "RVibes Hair Care Tablet", desc: "Promotes healthy hair growth and reduces hair fall." },
        { name: "RVibes Ferro Cell Capsule", desc: "Iron supplement to combat anemia." },
        { name: "RVibes Milk Thistle Capsule", desc: "Liver detox through herbal support." },
        { name: "RVibes Joint Ease Tablet", desc: "Eases joint pain and improves flexibility." },
        { name: "RVibes Omega Plus Capsule", desc: "Supports heart and brain health." },
        { name: "RVibes Neuroboost B12 Tablet", desc: "Enhances nerve function and mental alertness." },
        { name: "RVibes Vitamin D3 Tablet", desc: "Improves bone strength and immunity." }
    ],
    Herbals: [
        { name: "Liver Care Tablet", desc: "Supports liver detox and function." },
        { name: "R-Pathri Relif Tablet", desc: "Dissolves kidney stones naturally." },
        { name: "Likorin Syrup", desc: "Boosts digestion and bile health." }
    ]
};

const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);
    const [readMoreStates, setReadMoreStates] = useState({});
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Cosmetics');
    const [expandedProducts, setExpandedProducts] = useState({});
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    const toggleProductExpand = (index) => {
        setExpandedProducts((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));

    };


    return (
        <div className="landing-wrapper">
            {/* Header */}
            <header className="navbar">
                <div className="logo-wrapper">
                    <img src={logo} alt="Rvibes Logo" className="logo-img" />
                    <span className="logo-text">Rvibes Homoeopathy</span>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
                </div>
                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <img src={heroimage} alt="Hero" className="hero-image" />
                </div>
            </section>

            {/* Product Section */}
            <section className="products-section" id="products">
                <h2 className="section-title">Our Products</h2>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Tags */}
                <div className="product-tags">
                    {['Skin', 'Immunity', 'Liver', 'Hair', 'Joint', 'Anti-Aging', 'Women', 'Daily Care'].map((tag) => (
                        <span
                            key={tag}
                            className={`tag ${selectedTag === tag ? 'active' : ''}`}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Category Tabs */}
                <div className="product-tabs">
                    {Object.keys(products).map((cat) => (
                        <motion.button
                            key={cat}
                            className={`tab-button ${activeCategory === cat ? 'active' : ''}`}
                            whileHover={{ scale: 1.08, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            onClick={() => {
                                setActiveCategory(cat);
                                setSearchQuery('');
                                setSelectedTag(null);
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className="product-list">
                    {products[activeCategory]
                        .filter(p =>
                            (!searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
                            (!selectedTag || p.desc.toLowerCase().includes(selectedTag.toLowerCase()))
                        )
                        .map((item, idx) => {
                            const isExpanded = expandedProducts[idx];
                            return (
                                <div
                                    key={idx}
                                    className="product-item"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                    onClick={() => toggleProductExpand(idx)}
                                >
                                    <img src={productImages[activeCategory][idx]} alt={item.name} className="product-img" />

                                    <p className="product-name">{item.name}</p>

                                    <p className="product-desc">
                                        {expandedProducts[idx] ? item.desc : item.desc.slice(0, 160) + '...'}
                                    </p>

                                    {item.desc.length > 160 && (
                                        <span
                                            className="read-more-toggle"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleProductExpand(idx);
                                            }}
                                        >
                                            {expandedProducts[idx] ? 'Read Less' : 'Read More'}
                                        </span>
                                    )}

                                    {expandedProducts[idx] && item.ingredients && (
                                        <ul className="ingredients-list">
                                            {item.ingredients.map((ing, i) => (
                                                <li key={i}>🌿 {ing}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                </div>

                {/* Combo Packs */}
                {activeCategory && (
                    <div className="combo-pack-section">
                        <h3>Special Combo Packs</h3>
                        <div className="combo-grid">
                            {activeCategory === 'Cosmetics' && (
                                <>
                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h4>Skin Radiance Kit</h4>
                                        <p><strong>Includes:</strong><br /> Anti-Aging + Face Wash + Day Cream</p>
                                    </motion.div>

                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h4>Sensitive Skin Care</h4>
                                        <p><strong>Includes:</strong><br /> Anti-Fungal Cream + Anti-Psoriasis Cream</p>
                                    </motion.div>
                                </>
                            )}

                            {activeCategory === 'Nutraceuticals' && (
                                <>
                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h4>Women’s Wellness</h4>
                                        <p><strong>Includes:</strong><br /> Fem Immune + Daily Vita + NeuroBoost</p>
                                    </motion.div>

                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h4>Liver Detox Kit</h4>
                                        <p><strong>Includes:</strong><br /> Milk Thistle + Liver Care + Likorin Syrup</p>
                                    </motion.div>
                                </>
                            )}

                            {activeCategory === 'Herbals' && (
                                <>
                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h4>Kidney Care Pack</h4>
                                        <p><strong>Includes:</strong><br /> R-Pathri Relief + Likorin + Liver Care</p>
                                    </motion.div>

                                    <motion.div
                                        className="combo-box"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h4>Digestive Detox</h4>
                                        <p><strong>Includes:</strong><br /> Likorin + Milk Thistle + Herbal Support</p>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                )}


            </section>

            {/* About */}
            <section className="about-section" id="about" data-aos="fade-right">
                <h2 className="section-title" data-aos="zoom-in">About Rvibes</h2>
                <p className="about-text" data-aos="fade-up" data-aos-delay="200">
                    "To be the leader in holistic health, offering innovative and accessible homeopathic, nutraceutical, herbal, and cosmetic solutions that empower individuals to achieve optimal well-being and embrace natural health."
                </p>
            </section>



            {/* Contact */}
            <section className="contact-section" id="contact">
                <h2 className="section-title">Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone" required />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="Rvibes Logo" className="footer-logo" />
                        <span className="footer-name">Rvibes Homoeopathy</span>
                    </div>

                    <div className="footer-contact">
                        <p><strong>Contact:</strong></p>
                        <p>Email: <a href="mailto:office@rvibes.in">office@rvibes.in</a></p>
                        <p>Website: <a href="https://www.rvibeshomoeopathy.com" target="_blank" rel="noopener noreferrer">www.rvibeshomoeopathy.com</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Rvibes Homoeopathy. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
