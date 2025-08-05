# API 请求签名

融云 Server API 使用签名机制来确保请求的安全性。所有请求都必须包含有效的签名才能被正确处理。

## 签名机制

签名是通过 SHA1 哈希算法计算得出的，计算源字符串由以下三个参数拼接而成：

1. **App Secret**：您的应用密钥
2. **Nonce**：随机数
3. **Timestamp**：时间戳

## 签名生成步骤

### 1. 准备参数

- **App Secret**：从融云控制台获取的应用密钥
- **Nonce**：随机字符串，每次请求应不同，长度不超过 18 个字符
- **Timestamp**：从 1970 年 1 月 1 日 0 点 0 分 0 秒开始到现在的**毫秒**数

### 2. 拼接字符串

将三个参数按顺序拼接：
```
App Secret + Nonce + Timestamp
```

### 3. 计算 SHA1 哈希

对拼接后的字符串进行 SHA1 哈希计算，得到签名值。

## 代码示例

### Java 示例

```java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SignatureGenerator {
    
    public static String generateSignature(String appSecret, String nonce, String timestamp) {
        String signStr = appSecret + nonce + timestamp;
        return sha1(signStr);
    }
    
    private static String sha1(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] digest = md.digest(input.getBytes("UTF-8"));
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (Exception e) {
            throw new RuntimeException("SHA-1 calculation failed", e);
        }
    }
}
```

### PHP 示例

```php
function generateSignature($appSecret, $nonce, $timestamp) {
    $signStr = $appSecret . $nonce . $timestamp;
    return sha1($signStr);
}

// 使用示例
$appSecret = 'your-app-secret';
$nonce = '14314';
$timestamp = '1408710653000';
$signature = generateSignature($appSecret, $nonce, $timestamp);
```

### Python 示例

```python
import hashlib

def generate_signature(app_secret, nonce, timestamp):
    sign_str = app_secret + nonce + timestamp
    return hashlib.sha1(sign_str.encode('utf-8')).hexdigest()

# 使用示例
app_secret = 'your-app-secret'
nonce = '14314'
timestamp = '1408710653000'
signature = generate_signature(app_secret, nonce, timestamp)
```

### Node.js 示例

```javascript
const crypto = require('crypto');

function generateSignature(appSecret, nonce, timestamp) {
    const signStr = appSecret + nonce + timestamp;
    return crypto.createHash('sha1').update(signStr).digest('hex');
}

// 使用示例
const appSecret = 'your-app-secret';
const nonce = '14314';
const timestamp = '1408710653000';
const signature = generateSignature(appSecret, nonce, timestamp);
```

## HTTP 请求示例

完整的 HTTP 请求示例：

```http
POST /user/getToken.json HTTP/1.1
Host: api.rong-api.com
App-Key: your-own-app-key
Nonce: 14314
Timestamp: 1408710653000
Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f
Content-Type: application/x-www-form-urlencoded
Content-Length: 78

userId=jlk456j5&name=Ironman&portraitUri=http%3A%2F%2Fabc.com%2Fmyportrait.jpg
```

## 注意事项

1. **Nonce 唯一性**：每次请求的 Nonce 值必须不同，建议使用随机数或时间戳
2. **时间戳精度**：Timestamp 必须是毫秒级时间戳
3. **字符编码**：拼接字符串时使用 UTF-8 编码
4. **大小写**：签名值使用小写十六进制字符串

## 常见问题

### Q: 签名验证失败怎么办？

A: 请检查以下几点：
- App Secret 是否正确
- Nonce 和 Timestamp 是否按正确顺序拼接
- 时间戳是否为毫秒级
- 签名值是否为小写十六进制

### Q: 时间戳有有效期限制吗？

A: 是的，建议时间戳与服务器时间的差值不超过 5 分钟，以确保请求的时效性。

### Q: 可以使用相同的 Nonce 吗？

A: 不可以，每次请求的 Nonce 必须不同，否则会导致签名验证失败。 