// AI对话功能
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

// 模拟AI回复（可以替换为真实的API调用）
async function getAIResponse(userMessage) {
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 简单的关键词匹配回复（实际应用中应调用真实的AI API）
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('你好') || lowerMessage.includes('hello')) {
        return '你好！很高兴与你聊天。';
    } else if (lowerMessage.includes('你是谁') || lowerMessage.includes('你是谁')) {
        return '我是一个AI助手，致力于帮助你解答问题和进行友好的对话。';
    } else if (lowerMessage.includes('天气')) {
        return '抱歉，我目前无法获取实时天气信息。建议你查看天气应用或网站获取准确的天气预报。';
    } else if (lowerMessage.includes('时间') || lowerMessage.includes('现在几点')) {
        return `现在是 ${new Date().toLocaleString('zh-CN')}。`;
    } else if (lowerMessage.includes('帮助') || lowerMessage.includes('help')) {
        return '我可以帮助你进行对话、回答问题。你可以问我任何问题，我会尽力回答。';
    } else {
        // 默认回复
        const responses = [
            '这是一个有趣的话题！能告诉我更多细节吗？',
            '我理解你的意思。让我想想...',
            '谢谢你的分享。你觉得这个问题的关键点是什么？',
            '这是个很好的问题。虽然我可能无法给出完美的答案，但我会尽力帮助你。',
            '我明白了。我们可以从不同角度来探讨这个问题。'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// 添加消息到聊天界面
function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const p = document.createElement('p');
    p.textContent = content;
    
    contentDiv.appendChild(p);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// 显示打字效果
function typeMessage(element, text, callback) {
    const p = element.querySelector('p');
    p.textContent = '';
    let index = 0;
    
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            p.textContent += text[index];
            index++;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, 50); // 每50ms显示一个字符
}

// 发送消息
async function sendMessage() {
    const message = chatInput.value.trim();
    
    if (!message) {
        return;
    }
    
    // 禁用输入框和按钮
    chatInput.disabled = true;
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.disabled = true;
    
    // 添加用户消息
    addMessage(message, true);
    
    // 清空输入框
    chatInput.value = '';
    
    // 添加AI消息占位符
    const aiMessageDiv = addMessage('', false);
    const aiContentDiv = aiMessageDiv.querySelector('.message-content');
    const aiP = aiContentDiv.querySelector('p');
    aiP.textContent = '';
    aiP.classList.add('typing');
    
    // 获取AI回复
    try {
        const aiResponse = await getAIResponse(message);
        
        // 移除打字指示器
        aiP.classList.remove('typing');
        
        // 显示AI回复（打字效果）
        typeMessage(aiMessageDiv, aiResponse);
    } catch (error) {
        aiP.classList.remove('typing');
        aiP.textContent = '抱歉，发生了错误。请稍后再试。';
    }
    
    // 重新启用输入框和按钮
    chatInput.disabled = false;
    sendBtn.disabled = false;
    chatInput.focus();
}

// 处理回车键
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// 清空对话
function clearChat() {
    if (confirm('确定要清空所有对话吗？')) {
        chatMessages.innerHTML = `
            <div class="message ai-message">
                <div class="message-content">
                    <p>你好！我是AI助手，很高兴与你聊天。有什么我可以帮助你的吗？</p>
                </div>
            </div>
        `;
        chatInput.value = '';
        chatInput.focus();
    }
}

// 页面加载完成后聚焦输入框
document.addEventListener('DOMContentLoaded', () => {
    chatInput.focus();
    
    // 确保聊天区域滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

