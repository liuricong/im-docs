// 手风琴效果处理
export default {
  enhanceApp({ app }) {
    // 在客户端挂载后处理手风琴效果
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        initAccordion();
      });
    }
  }
}

function initAccordion() {
  const sidebarItems = document.querySelectorAll('.VPSidebarItem.level-0');
  
  sidebarItems.forEach(item => {
    const itemElement = item.querySelector('.item');
    const itemsContainer = item.querySelector('.items');
    
    if (itemElement && itemsContainer) {
      itemElement.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 切换当前项的状态
        item.classList.toggle('open');
        
        // 关闭其他展开的项
        sidebarItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
          }
        });
      });
    }
  });
} 