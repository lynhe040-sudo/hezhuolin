// 社交媒体链接配置
const socialLinks = {
    instagram: 'https://www.instagram.com/lin2024.10/', // Instagram账号
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/your_user_id', // 需要完整的用户ID
    douyin: 'https://www.douyin.com/user/hzl7816' // 抖音账号
};

// 检测是否为移动设备
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 打开社交媒体链接
function openSocialLink(platform) {
    let url = '';
    
    if (isMobile()) {
        // 移动设备：尝试打开APP，如果失败则打开网页
        switch(platform) {
            case 'instagram':
                // Instagram APP链接格式
                const instagramApp = 'instagram://user?username=lin2024.10';
                const instagramWeb = 'https://www.instagram.com/lin2024.10/';
                
                // 尝试打开APP
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = instagramApp;
                document.body.appendChild(iframe);
                
                // 如果2秒后还在当前页面，说明APP未安装，跳转到网页
                setTimeout(() => {
                    document.body.removeChild(iframe);
                    window.location.href = instagramWeb;
                }, 2000);
                break;
                
            case 'xiaohongshu':
                // 小红书APP链接格式 - 使用用户名
                const xhsApp = 'xhsdiscover://user?nickname=hzl7816';
                const xhsWeb = 'https://www.xiaohongshu.com/user/profile/hzl7816';
                
                const iframe2 = document.createElement('iframe');
                iframe2.style.display = 'none';
                iframe2.src = xhsApp;
                document.body.appendChild(iframe2);
                
                setTimeout(() => {
                    document.body.removeChild(iframe2);
                    window.location.href = xhsWeb;
                }, 2000);
                break;
                
            case 'douyin':
                // 抖音APP链接格式
                // 抖音需要使用抖音号或sec_user_id
                const douyinApp = 'snssdk1128://user/profile?unique_id=hzl7816';
                const douyinWeb = 'https://www.douyin.com/user/hzl7816';
                
                const iframe3 = document.createElement('iframe');
                iframe3.style.display = 'none';
                iframe3.src = douyinApp;
                document.body.appendChild(iframe3);
                
                setTimeout(() => {
                    document.body.removeChild(iframe3);
                    window.location.href = douyinWeb;
                }, 2000);
                break;
        }
    } else {
        // 桌面设备：直接打开网页版
        switch(platform) {
            case 'instagram':
                window.open('https://www.instagram.com/lin2024.10/', '_blank');
                break;
            case 'xiaohongshu':
                window.open('https://www.xiaohongshu.com/user/profile/hzl7816', '_blank');
                break;
            case 'douyin':
                window.open('https://www.douyin.com/user/hzl7816', '_blank');
                break;
        }
    }
}

// 页面加载时初始化链接
document.addEventListener('DOMContentLoaded', () => {
    // 为Instagram链接添加点击事件
    const instagramLink = document.querySelector('a[data-social="instagram"]');
    if (instagramLink) {
        instagramLink.addEventListener('click', (e) => {
            e.preventDefault();
            openSocialLink('instagram');
        });
    }
    
    // 为小红书链接添加点击事件
    const xiaohongshuLink = document.querySelector('a[data-social="xiaohongshu"]');
    if (xiaohongshuLink) {
        xiaohongshuLink.addEventListener('click', (e) => {
            e.preventDefault();
            openSocialLink('xiaohongshu');
        });
    }
    
    // 为抖音链接添加点击事件
    const douyinLink = document.querySelector('a[data-social="douyin"]');
    if (douyinLink) {
        douyinLink.addEventListener('click', (e) => {
            e.preventDefault();
            openSocialLink('douyin');
        });
    }
});

