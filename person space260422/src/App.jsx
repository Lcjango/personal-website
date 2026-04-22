import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('全部');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: '风景摄影',
      category: '静态摄影',
      description: '记录大自然的美丽瞬间',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20photography%20mountains%20and%20lake&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: '人文纪实',
      category: '静态摄影',
      description: '捕捉生活中的真实情感',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=street%20photography%20people%20in%20city&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: '空间设计',
      category: '平面交互',
      description: '探索建筑与空间的关系',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20architecture%20interior%20design&image_size=landscape_4_3'
    },
    {
      id: 4,
      title: '应用开发',
      category: '应用开发',
      description: '创造实用的工具和应用',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=app%20development%20interface%20design&image_size=landscape_4_3'
    },
    {
      id: 5,
      title: '平面设计',
      category: '平面交互',
      description: '融合创意与美学的视觉作品',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=graphic%20design%20poster%20art&image_size=landscape_4_3'
    },
    {
      id: 6,
      title: '视频制作',
      category: '动态影像',
      description: '讲述有温度的故事',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=video%20production%20filmmaking%20cinematic&image_size=landscape_4_3'
    }
  ];

  const filteredItems = activeFilter === '全部' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories = ['全部', '静态摄影', '动态影像', '平面交互', '应用开发'];

  return (
    <div className="App">
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav>
          <div className="logo">[你的名字]</div>
          <ul className="nav-links">
            <li><a href="#home">主页</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#portfolio">作品</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>[你的名字]</h1>
          <p>创意设计师 & 开发者</p>
          <p>专注于视觉设计、前端开发和创意内容创作</p>
          <motion.a 
            href="#portfolio" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            查看作品
          </motion.a>
        </motion.div>
      </section>

      <section id="about" className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          关于我
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>我的故事</h3>
            <p>我是一名充满激情的创意设计师和开发者，拥有多年的行业经验。我专注于创建美观、实用且具有创新性的数字产品。</p>
            <p>我的设计理念是将美学与功能完美结合，通过简约而有力的视觉语言传达品牌价值。同时，我也热衷于前端开发，能够将设计理念转化为实际可用的产品。</p>
            <div className="skills">
              <span className="skill">UI/UX 设计</span>
              <span className="skill">前端开发</span>
              <span className="skill">摄影</span>
              <span className="skill">视频制作</span>
              <span className="skill">平面设计</span>
              <span className="skill">3D 建模</span>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20creative%20designer&image_size=portrait_4_3" 
              alt="关于我" 
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius)' }}
            />
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            精选作品
          </motion.h2>
          <div className="filter-buttons">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={activeFilter === category ? 'active' : ''}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="portfolio-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <motion.a 
                    href="#" 
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    查看详情
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          取得联系
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          如果您有任何问题或合作意向，欢迎随时联系我
        </motion.p>
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">邮箱</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">消息</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            发送消息
          </motion.button>
        </motion.form>
      </section>

      <footer>
        <div className="footer-content">
          <div className="social-links">
            <motion.a 
              href="#" 
              aria-label="GitHub"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Instagram"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Twitter"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </motion.a>
          </div>
          <p>© 2026 [你的名字]. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;