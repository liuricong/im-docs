# API 域名

融云提供多个数据中心的 API 域名，以确保服务的高可用性和低延迟。您可以根据您的应用部署位置选择最适合的域名。

## 可用域名

### 主要域名

| 区域 | 域名 | 说明 |
|------|------|------|
| 中国大陆 | `api.rong-api.com` | 主要域名，适用于中国大陆地区 |
| 中国大陆 | `api.cn.ronghub.com` | 备用域名，适用于中国大陆地区 |
| 香港 | `api-hk.rong-api.com` | 香港地区专用域名 |
| 新加坡 | `api-sg.rong-api.com` | 新加坡地区专用域名 |
| 美国 | `api-us.rong-api.com` | 美国地区专用域名 |
| 欧洲 | `api-eu.rong-api.com` | 欧洲地区专用域名 |

### 备用域名

为了确保服务的高可用性，建议您实现域名的自动切换机制。当主要域名不可用时，可以自动切换到备用域名。

## 域名选择建议

### 根据地理位置选择

- **中国大陆用户**：优先使用 `api.rong-api.com`，备用 `api.cn.ronghub.com`
- **香港用户**：使用 `api-hk.rong-api.com`
- **东南亚用户**：使用 `api-sg.rong-api.com`
- **北美用户**：使用 `api-us.rong-api.com`
- **欧洲用户**：使用 `api-eu.rong-api.com`

### 根据业务需求选择

- **低延迟要求**：选择距离用户最近的域名
- **高可用性要求**：实现多域名自动切换
- **合规要求**：根据数据存储合规要求选择相应域名

## 域名切换实现

### 自动切换策略

建议实现以下域名切换策略：

1. **健康检查**：定期检查域名可用性
2. **故障检测**：监控请求失败率
3. **自动切换**：当检测到故障时自动切换到备用域名
4. **恢复检测**：定期尝试恢复使用主要域名

### 代码示例

#### Java 示例

```java
public class DomainManager {
    private static final String[] DOMAINS = {
        "api.rong-api.com",
        "api.cn.ronghub.com",
        "api-hk.rong-api.com"
    };
    
    private int currentDomainIndex = 0;
    private Map<String, Boolean> domainHealth = new HashMap<>();
    
    public String getCurrentDomain() {
        return DOMAINS[currentDomainIndex];
    }
    
    public void switchToNextDomain() {
        currentDomainIndex = (currentDomainIndex + 1) % DOMAINS.length;
    }
    
    public void markDomainAsUnhealthy(String domain) {
        domainHealth.put(domain, false);
        if (domain.equals(getCurrentDomain())) {
            switchToNextDomain();
        }
    }
    
    public void markDomainAsHealthy(String domain) {
        domainHealth.put(domain, true);
    }
}
```

#### Node.js 示例

```javascript
class DomainManager {
    constructor() {
        this.domains = [
            'api.rong-api.com',
            'api.cn.ronghub.com',
            'api-hk.rong-api.com'
        ];
        this.currentIndex = 0;
        this.domainHealth = new Map();
    }
    
    getCurrentDomain() {
        return this.domains[this.currentIndex];
    }
    
    switchToNextDomain() {
        this.currentIndex = (this.currentIndex + 1) % this.domains.length;
    }
    
    markDomainAsUnhealthy(domain) {
        this.domainHealth.set(domain, false);
        if (domain === this.getCurrentDomain()) {
            this.switchToNextDomain();
        }
    }
    
    markDomainAsHealthy(domain) {
        this.domainHealth.set(domain, true);
    }
}
```

## 健康检查

### 检查方法

可以通过以下方式检查域名健康状态：

1. **HTTP 状态码检查**：检查 API 响应状态码
2. **响应时间检查**：监控请求响应时间
3. **错误率检查**：统计请求失败率
4. **DNS 解析检查**：检查域名解析是否正常

### 检查频率

建议的健康检查频率：

- **实时检查**：每次请求后检查响应状态
- **定期检查**：每 5-10 分钟进行一次主动健康检查
- **故障检查**：当检测到异常时立即进行检查

## 注意事项

1. **DNS 缓存**：注意 DNS 缓存可能影响域名切换效果
2. **连接池**：为不同域名维护独立的连接池
3. **重试机制**：实现请求重试机制，提高成功率
4. **监控告警**：设置域名健康状态监控和告警

## 最佳实践

1. **多域名配置**：配置多个备用域名
2. **智能切换**：根据地理位置和网络状况智能选择域名
3. **监控告警**：实时监控域名健康状态
4. **文档记录**：记录域名切换日志，便于问题排查
5. **测试验证**：定期测试域名切换功能 