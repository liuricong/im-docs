# Server API Integration

Welcome to RongCloud Server API. This documentation will guide you through how RongCloud Server API works and help you complete your first API call, enabling you to quickly integrate RongCloud's instant messaging capabilities into your applications.

Through Server API, you can implement rich business functions on your application server (App Server), such as:

* **User Management**: Connect your users to RongCloud IM services (register users) and set user information.
* **Message Sending**: Send private chat, group chat messages, or system notifications.
* **Group Management**: Create groups, manage groups, and maintain group member relationships.
* **Content Moderation**: Review message content to ensure community atmosphere.
* **Status Subscription**: Get real-time user online status, message delivery status, etc. through server callbacks.

**Some service management interfaces and advanced extension features are only available in IM Server API**. For complete API functionality, see [API List](/en/api/im/api-list).

## Core Concepts

To better use Server API, we recommend you understand the following core concepts:

* **[API Request Signature](/en/api/im/signature)**: Understand the security authentication mechanism of Server API to ensure your requests are processed correctly.
* **Data Format**: Most interfaces use `application/x-www-form-urlencoded` format, while a few specific interfaces use `application/json`.
* **[Server API Domains](/en/api/im/domains)**: Understand the multi-data center domains provided by RongCloud and implement high-availability deployment for your applications.
* **[Status Codes](/en/api/im/status-codes)**: Familiarize yourself with the meaning of different status codes to quickly locate issues when they occur.
* **[Server Callback](/en/api/im/callback)**: By configuring callbacks, your server can receive real-time event notifications from RongCloud services, such as user online status changes, chatroom status changes, etc.

## Interaction Flow

::: warning Security Warning
You **must** call all Server API interfaces through your application server. **Never** call Server API directly from the client (App) for convenience, as this will seriously expose your `App Secret` and pose significant security risks.
:::

The following diagram clearly shows the interaction flow between your application (App), your server (App Server), and RongCloud servers (IM Server):

1. The App client initiates a business request to your application server (e.g., requesting IM login).
2. Your application server calls RongCloud Server API to obtain a Token for that user.
3. Your application server returns the obtained Token to the client.
4. The client uses this Token to connect to RongCloud's IM service for real-time communication.

![App, App Server and IM Server Interaction Diagram](/images/interaction-flow.svg)

## Quick Start: Call Your First Interface

Below, we will guide you through a complete Server API call using user registration as an example.

### Step 1: Preparation

Before starting, please ensure:

* You have created an application in the RongCloud console and obtained valid **App Key** and **App Secret**. These two credentials will be used for API request signature authentication.
* You have prepared a test client for establishing IM connections using the generated Token later.
* We recommend you understand the default behavior and configuration of IM Server API in advance to make the overall integration experience smoother.

### Step 2: Build and Send Request

The Server API call process mainly consists of three steps: prepare parameters, generate signature, and send request.

#### 1. Prepare Request Parameters

Calling the user registration interface requires the following business parameters: `userId`, `name`, and `portraitUri`.

At the same time, all Server API requests need to include the following authentication parameters in the HTTP Header:

* **App-Key**: Your application's App Key.
* **Nonce**: Random number, should be different for each request, length not exceeding 18 characters.
* **Timestamp**: Timestamp, the number of **milliseconds** from January 1, 1970, 00:00:00 to now.

#### 2. Generate Signature

Signature is the core security mechanism of Server API. All requests must be authenticated by signature. The signature `Signature` is calculated using the SHA1 hash algorithm, with the source string concatenated from `App Secret`, `Nonce`, and `Timestamp`.

For detailed signature generation methods, see [API Request Signature](/en/api/im/signature).

#### 3. Send HTTP Request

After preparing all parameters, you can send the HTTP request. All requests **must** use HTTPS protocol, and all current version IM Server API interfaces are `POST` requests.

Here is a complete HTTP request example for calling the `user/getToken.json` interface:

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

::: tip Note
The Server API domain `Host` has multiple available addresses in different regions. To ensure high availability of services, we recommend you implement automatic domain switching mechanisms. See [Server API Domains](/en/api/im/domains) for details.
:::

### Step 3: Handle Response

After a successful request, the RongCloud server will return response data in `application/json` format.

A successful `getToken` response example is as follows:

```json
{
  "code": 200,
  "userId": "jlk456j5",
  "token": "xPv1GxwCgQo6h9xPv1GxwCgQo6h9xPv1GxwCgQo6h9xPv1GxwCgQo6h9"
}
```

The response includes:

* **code**: Status code, 200 indicates success.
* **userId**: The user ID you provided.
* **token**: The generated Token that the client will use to connect to IM services.

### Step 4: Use Token

The client can now use the obtained Token to connect to RongCloud's IM service and start real-time communication.

## Next Steps

Congratulations! You have successfully completed your first Server API call. Next, you can:

* Explore more [API interfaces](/en/api/im/api-list) to implement richer functionality.
* Learn about [user management](/en/api/im/user/register) to manage your users.
* Understand [message sending](/en/api/im/message/private/send) to implement chat functionality.
* Configure [server callbacks](/en/api/im/callback) to receive real-time event notifications.

If you encounter any issues during the integration process, please refer to our [status codes](/en/api/im/status-codes) or contact our technical support team. 