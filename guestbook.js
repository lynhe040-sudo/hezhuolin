// 留言功能
const guestbookForm = document.getElementById('guestbookForm');
const messagesList = document.getElementById('messagesList');

// 从localStorage加载留言
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    displayMessages(messages);
}

// 显示留言
function displayMessages(messages) {
    messagesList.innerHTML = '';
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<p class="no-messages">还没有留言，来做第一个吧！😊</p>';
        return;
    }
    
    // 按时间倒序排列（最新的在前）
    messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    messages.forEach((message, index) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-item';
        messageDiv.style.animationDelay = `${index * 0.1}s`;
        
        const date = new Date(message.timestamp);
        const formattedDate = date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageDiv.innerHTML = `
            <div class="message-header">
                <span class="message-author">${escapeHtml(message.name)}</span>
                <span class="message-date">${formattedDate}</span>
            </div>
            <div class="message-content-text">${escapeHtml(message.message)}</div>
        `;
        
        messagesList.appendChild(messageDiv);
    });
}

// HTML转义，防止XSS攻击
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 保存留言
function saveMessage(name, message) {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    
    const newMessage = {
        id: Date.now(),
        name: name.trim() || '匿名访客',
        message: message.trim(),
        timestamp: new Date().toISOString(),
        isAnonymous: !name.trim() // 标记是否为匿名留言
    };
    
    messages.push(newMessage);
    localStorage.setItem('guestbookMessages', JSON.stringify(messages));
    
    return newMessage;
}

// 表单提交处理
guestbookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('visitorName');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    
    if (!message) {
        alert('请输入留言内容！');
        messageInput.focus();
        return;
    }
    
    // 如果名字为空，使用"匿名"
    const displayName = name || '匿名访客';
    
    // 保存留言
    saveMessage(displayName, message);
    
    // 显示成功提示
    showSuccessMessage();
    
    // 清空表单
    guestbookForm.reset();
    
    // 重新加载留言列表
    loadMessages();
});

// 显示成功提示
function showSuccessMessage() {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ 留言已发送！';
    submitBtn.style.background = '#22c55e';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);
}

// 页面加载时加载留言
document.addEventListener('DOMContentLoaded', () => {
    loadMessages();
});

