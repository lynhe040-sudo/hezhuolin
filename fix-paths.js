// 自动检测并修复路径问题（适用于GitHub Pages和Vercel）
(function() {
    'use strict';
    
    // 检测当前环境
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // 判断是否在GitHub Pages上（有子路径）
    const isGitHubPages = hostname.includes('github.io') && pathname.split('/').filter(p => p).length > 1;
    
    if (isGitHubPages) {
        // 提取仓库名
        const pathParts = pathname.split('/').filter(p => p && p !== 'index.html');
        const repoName = pathParts[0];
        
        // 设置base标签
        if (!document.querySelector('base')) {
            const base = document.createElement('base');
            base.href = '/' + repoName + '/';
            document.head.insertBefore(base, document.head.firstChild);
        }
    }
    
    // 修复所有图片路径
    function fixImagePaths() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('//')) {
                // 确保是相对路径
                if (!src.startsWith('./') && !src.startsWith('/')) {
                    img.setAttribute('src', './' + src);
                }
            }
        });
    }
    
    // 修复所有链接路径
    function fixLinkPaths() {
        const links = document.querySelectorAll('a[href]');
        links.forEach(function(link) {
            const href = link.getAttribute('href');
            // 修复相对路径的HTML文件链接
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('//')) {
                if (href.includes('.html') && !href.startsWith('./')) {
                    link.setAttribute('href', './' + href);
                }
            }
        });
    }
    
    // 修复CSS和JS文件路径
    function fixAssetPaths() {
        const scripts = document.querySelectorAll('script[src]');
        const styles = document.querySelectorAll('link[rel="stylesheet"]');
        
        [].forEach.call(scripts, function(script) {
            const src = script.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('./')) {
                script.setAttribute('src', './' + src);
            }
        });
        
        [].forEach.call(styles, function(style) {
            const href = style.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('//') && !href.startsWith('./')) {
                style.setAttribute('href', './' + href);
            }
        });
    }
    
    // 页面加载完成后执行修复
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            fixImagePaths();
            fixLinkPaths();
            fixAssetPaths();
        });
    } else {
        fixImagePaths();
        fixLinkPaths();
        fixAssetPaths();
    }
    
    // 监听图片加载错误，自动重试
    window.addEventListener('load', function() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.addEventListener('error', function() {
                const src = this.getAttribute('src');
                if (src && !src.includes('http')) {
                    // 尝试不同的路径
                    const attempts = [
                        './' + src,
                        '/' + src.replace('./', ''),
                        src.replace('images/', '/images/')
                    ];
                    
                    let attemptIndex = 0;
                    const tryNext = () => {
                        if (attemptIndex < attempts.length) {
                            this.src = attempts[attemptIndex];
                            attemptIndex++;
                        }
                    };
                    
                    this.addEventListener('error', tryNext, { once: true });
                    tryNext();
                }
            });
        });
    });
})();


