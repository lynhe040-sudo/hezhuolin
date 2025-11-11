// 照片轮播功能
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

// 获取图片边缘主色调（用于渐变背景）
function getImageDominantColor(img, callback) {
    if (!img) {
        callback({ lightColor: '#1a1a1a', darkColor: '#000000' });
        return;
    }

    const processImage = () => {
        // 检查图片是否已加载
        if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) {
            img.addEventListener('load', processImage, { once: true });
            img.addEventListener('error', () => {
                callback({ lightColor: '#1a1a1a', darkColor: '#000000' });
            }, { once: true });
            return;
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = Math.min(img.naturalWidth, 300);
        canvas.height = Math.min(img.naturalHeight, 300);
        
        try {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            let r = 0, g = 0, b = 0;
            let count = 0;
            
            // 采样边缘区域20%
            const edgeWidth = Math.floor(canvas.width * 0.2);
            const edgeHeight = Math.floor(canvas.height * 0.2);
            
            // 采样顶部边缘
            for (let x = 0; x < canvas.width; x += 3) {
                for (let y = 0; y < edgeHeight; y += 3) {
                    const index = (y * canvas.width + x) * 4;
                    r += data[index];
                    g += data[index + 1];
                    b += data[index + 2];
                    count++;
                }
            }
            
            // 采样底部边缘
            for (let x = 0; x < canvas.width; x += 3) {
                for (let y = canvas.height - edgeHeight; y < canvas.height; y += 3) {
                    const index = (y * canvas.width + x) * 4;
                    r += data[index];
                    g += data[index + 1];
                    b += data[index + 2];
                    count++;
                }
            }
            
            // 采样左侧边缘
            for (let y = edgeHeight; y < canvas.height - edgeHeight; y += 3) {
                for (let x = 0; x < edgeWidth; x += 3) {
                    const index = (y * canvas.width + x) * 4;
                    r += data[index];
                    g += data[index + 1];
                    b += data[index + 2];
                    count++;
                }
            }
            
            // 采样右侧边缘
            for (let y = edgeHeight; y < canvas.height - edgeHeight; y += 3) {
                for (let x = canvas.width - edgeWidth; x < canvas.width; x += 3) {
                    const index = (y * canvas.width + x) * 4;
                    r += data[index];
                    g += data[index + 1];
                    b += data[index + 2];
                    count++;
                }
            }
            
            if (count > 0) {
                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);
                
                // 创建更柔和的渐变色：从较亮的边缘色过渡到更深的同色系
                const lightColor = `rgb(${r}, ${g}, ${b})`;
                // 保持色相，稍微降低饱和度和亮度
                const darkR = Math.max(0, Math.floor(r * 0.25));
                const darkG = Math.max(0, Math.floor(g * 0.25));
                const darkB = Math.max(0, Math.floor(b * 0.25));
                const darkColor = `rgb(${darkR}, ${darkG}, ${darkB})`;
                
                callback({ lightColor, darkColor });
            } else {
                callback({ lightColor: '#000000', darkColor: '#000000' });
            }
        } catch (e) {
            callback({ lightColor: '#1a1a1a', darkColor: '#000000' });
        }
    };
    
    processImage();
}

// 设置渐变背景颜色（高级过渡效果）
function setBackgroundColor(colors) {
    const container = document.querySelector('.carousel-container');
    if (container && colors) {
        // 使用更高级的渐变：从照片边缘色向外过渡
        const gradient = `radial-gradient(ellipse 80% 100% at center, ${colors.lightColor} 0%, ${colors.lightColor} 40%, ${colors.darkColor} 100%)`;
        container.style.setProperty('background', gradient, 'important');
        container.style.setProperty('background-image', 'none', 'important');
    }
}

// 为每张图片设置背景色
function setupImageBackgrounds() {
    // 设置初始背景
    const initialImg = slides[currentSlideIndex]?.querySelector('img');
    if (initialImg) {
        getImageDominantColor(initialImg, setBackgroundColor);
    }
}

// 自动播放
function autoPlay() {
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }, 5000); // 每5秒切换一次
}

// 显示指定幻灯片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            // 更新背景色（使用渐变过渡）
            const img = slide.querySelector('img');
            getImageDominantColor(img, (colors) => {
                setBackgroundColor(colors);
            });
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

// 切换幻灯片
function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// 跳转到指定幻灯片
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        // 延迟设置初始背景，确保图片加载完成
        const initBackground = () => {
            const activeSlide = slides[currentSlideIndex];
            if (activeSlide) {
                const img = activeSlide.querySelector('img');
                if (img) {
                    getImageDominantColor(img, setBackgroundColor);
                }
            }
        };
        
        // 立即尝试设置一次
        setTimeout(initBackground, 100);
        
        // 为每张图片添加加载监听
        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                const onLoad = () => {
                    if (index === currentSlideIndex) {
                        getImageDominantColor(img, setBackgroundColor);
                    }
                };
                
                if (img.complete) {
                    onLoad();
                } else {
                    img.addEventListener('load', onLoad, { once: true });
                }
            }
        });
        
        // 启动自动播放
        autoPlay();
    }
});

// 平滑滚动
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

