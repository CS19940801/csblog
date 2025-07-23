/* 全局UI修复脚本 - 海贼王主题增强 */

// 为所有子页面添加与首页完全一致的导航栏
function createUnifiedNavigation() {
  // 移除现有的导航覆盖层
  const existingOverlay = document.querySelector('.custom-nav-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }
  
  // 创建导航容器
  const navOverlay = document.createElement('div');
  navOverlay.className = 'custom-nav-overlay';
  navOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: #1e2332;
    border-bottom: 1px solid #3a3f4f;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  `;
  
  // 创建导航链接
  const navItems = [
    { href: '/', title: '首页', text: '首页' },
    { href: '/categories/', title: '分类', text: '分类' },
    { href: '/tags/', title: '标签', text: '标签' },
    { href: '/about/', title: '关于', text: '关于' }
  ];
  
  navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.title = item.title;
    link.textContent = item.text;
    link.style.cssText = `
      color: #ffffff;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      padding: 8px 20px;
      margin: 0 10px;
      border-radius: 6px;
      transition: all 0.3s ease;
    `;
    
    // 高亮当前页面
    if (window.location.pathname === item.href || 
        (item.href !== '/' && window.location.pathname.startsWith(item.href))) {
      link.style.color = '#ff6b6b';
      link.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
    }
    
    // 添加悬停效果
    link.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
      this.style.color = '#ff6b6b';
      this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
      if (!(window.location.pathname === item.href || 
          (item.href !== '/' && window.location.pathname.startsWith(item.href)))) {
        this.style.backgroundColor = 'transparent';
        this.style.color = '#ffffff';
      }
      this.style.transform = 'translateY(0)';
    });
    
    navOverlay.appendChild(link);
  });
  
  document.body.appendChild(navOverlay);
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createUnifiedNavigation);
} else {
  createUnifiedNavigation();
}

// 监听页面变化，确保导航始终存在
const observer = new MutationObserver(function(mutations) {
  if (!document.querySelector('.custom-nav-overlay')) {
    createUnifiedNavigation();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 添加海贼王主题特效
  addOnePieceEffects();
  
  // 统一导航样式
  unifyNavigation();
  
  // 添加交互效果
  addInteractiveEffects();
});

// 海贼王主题特效
function addOnePieceEffects() {
  // 添加随机飘动的海贼王符号
  const symbols = ['⚓', '🏴‍☠️', '⛵', '🗺️', '💎'];
  
  setInterval(() => {
    if (Math.random() < 0.3) { // 30%概率生成
      createFloatingSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }, 3000);
}

// 创建飘动符号
function createFloatingSymbol(symbol) {
  const element = document.createElement('div');
  element.textContent = symbol;
  element.style.cssText = `
    position: fixed;
    font-size: 20px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
    left: ${Math.random() * window.innerWidth}px;
    top: ${window.innerHeight}px;
    animation: floatUp 8s linear forwards;
  `;
  
  document.body.appendChild(element);
  
  // 8秒后移除元素
  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }, 8000);
}

// 统一导航样式
function unifyNavigation() {
  // 确保所有页面的导航都有统一样式
  const header = document.querySelector('.header');
  if (header) {
    header.style.cssText += `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 1000 !important;
      background: #1e2332 !important;
      height: 70px !important;
    `;
  }
}

// 添加交互效果
function addInteractiveEffects() {
  // 为所有链接添加海贼王风格的hover效果
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // 为卡片添加3D效果
  const cards = document.querySelectorAll('.post, .category-list-item, .tag-list-item');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) rotateX(5deg)';
      this.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotateX(0deg)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    });
  });
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  /* 海贼王主题滚动条 */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1a1f2e;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 6px;
    border: 2px solid #1a1f2e;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  }
`;
document.head.appendChild(style);

console.log('🏴‍☠️ 海贼王主题已激活！欢迎来到精神家园博客！');
/* ================================================ */

(function() {
  'use strict';
  
  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    createUnifiedNavigation();
    fixPageLayout();
    addMobileMenuToggle();
  });
  
  // 创建统一的顶部导航
  function createUnifiedNavigation() {
    // 检查是否已经存在导航
    if (document.querySelector('.unified-top-nav')) {
      return;
    }
    
    // 创建导航容器
    const nav = document.createElement('nav');
    nav.className = 'unified-top-nav';
    
    // 创建Logo区域
    const logo = document.createElement('a');
    logo.href = '/';
    logo.className = 'unified-logo';
    logo.innerHTML = `
      <div class="unified-logo-icon">CS</div>
      <span>enjoy's 精神家园</span>
    `;
    
    // 创建导航菜单
    const menu = document.createElement('ul');
    menu.className = 'unified-nav-menu';
    
    // 导航项目
    const menuItems = [
      { name: '首页', href: '/', icon: '🏠' },
      { name: '归档', href: '/archives/', icon: '📚' },
      { name: '分类', href: '/categories/', icon: '📂' },
      { name: '标签', href: '/tags/', icon: '🏷️' },
      { name: '关于', href: '/about/', icon: '👤' }
    ];
    
    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'unified-nav-item';
      
      const a = document.createElement('a');
      a.href = item.href;
      a.className = 'unified-nav-link';
      a.innerHTML = `${item.icon} ${item.name}`;
      
      // 高亮当前页面
      if (isCurrentPage(item.href)) {
        a.classList.add('active');
      }
      
      li.appendChild(a);
      menu.appendChild(li);
    });
    
    // 创建移动端菜单按钮
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'unified-mobile-toggle';
    mobileToggle.innerHTML = '☰';
    mobileToggle.style.cssText = `
      display: none;
      background: none;
      border: none;
      color: #f0f6fc;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    `;
    
    // 组装导航
    nav.appendChild(logo);
    nav.appendChild(menu);
    nav.appendChild(mobileToggle);
    
    // 插入到页面顶部
    document.body.insertBefore(nav, document.body.firstChild);
  }
  
  // 判断是否为当前页面
  function isCurrentPage(href) {
    const currentPath = window.location.pathname;
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  }
  
  // 修复页面布局
  function fixPageLayout() {
    // 为body添加顶部边距
    document.body.style.paddingTop = '70px';
    
    // 隐藏原有的header
    const headers = document.querySelectorAll('.header, .headband');
    headers.forEach(header => {
      header.style.display = 'none';
    });
    
    // 修复主内容区域
    const main = document.querySelector('.main');
    if (main) {
      main.style.marginTop = '0';
      main.style.minHeight = 'calc(100vh - 70px)';
    }
    
    // 修复侧边栏位置
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.style.top = '70px';
      sidebar.style.height = 'calc(100vh - 70px)';
    }
  }
  
  // 添加移动端菜单切换功能
  function addMobileMenuToggle() {
    const toggle = document.querySelector('.unified-mobile-toggle');
    const menu = document.querySelector('.unified-nav-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (!toggle || !menu) return;
    
    // 移动端样式
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleMobileView(e) {
      if (e.matches) {
        toggle.style.display = 'block';
        menu.style.cssText = `
          position: fixed;
          top: 70px;
          left: -100%;
          width: 280px;
          height: calc(100vh - 70px);
          background: rgba(33, 38, 45, 0.95);
          backdrop-filter: blur(10px);
          flex-direction: column;
          padding: 2rem 1rem;
          transition: left 0.3s ease;
          border-right: 1px solid #30363d;
          z-index: 1001;
        `;
      } else {
        toggle.style.display = 'none';
        menu.style.cssText = '';
      }
    }
    
    mediaQuery.addListener(handleMobileView);
    handleMobileView(mediaQuery);
    
    // 切换菜单显示
    let menuOpen = false;
    toggle.addEventListener('click', function() {
      menuOpen = !menuOpen;
      if (menuOpen) {
        menu.style.left = '0';
        if (sidebar) sidebar.style.transform = 'translateX(-100%)';
      } else {
        menu.style.left = '-100%';
        if (sidebar) sidebar.style.transform = 'translateX(0)';
      }
    });
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', function(e) {
      if (menuOpen && !toggle.contains(e.target) && !menu.contains(e.target)) {
        menuOpen = false;
        menu.style.left = '-100%';
        if (sidebar) sidebar.style.transform = 'translateX(0)';
      }
    });
  }
  
  // 添加平滑滚动效果
  function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // 添加页面加载动画
  function addPageAnimations() {
    const elements = document.querySelectorAll('.post, .category-list-item, .tag-list-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
  }
  
  // 初始化所有功能
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      addSmoothScrolling();
      addPageAnimations();
    }, 100);
  });
  
})();