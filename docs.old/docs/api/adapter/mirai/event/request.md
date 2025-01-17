# iamai.adapter.mirai.event.request

申请事件。

## *class* `RequestEvent`(self, adapter, **data) {#RequestEvent}

Bases: `iamai.adapter.mirai.event.base.MiraiEvent`

申请事件

- **Arguments**

  - **adapter** (*~T_Adapter*) - 产生此事件的适配器对象。

  - ****data** (*Any*) - 事件数据。

### *async method* `approve(self, message = '')` {#RequestEvent.approve}

同意请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

### *async method* `refuse(self, message = '')` {#RequestEvent.refuse}

拒绝请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

## *class* `NewFriendRequestEvent`(self, adapter, **data) {#NewFriendRequestEvent}

Bases: `iamai.adapter.mirai.event.request.RequestEvent`

添加好友申请

- **Arguments**

  - **adapter** (*~T_Adapter*) - 产生此事件的适配器对象。

  - ****data** (*Any*) - 事件数据。

- **Attributes**

  - **type** (*Literal['NewFriendRequestEvent']*)

  - **eventId** (*int*)

  - **fromId** (*int*)

  - **groupId** (*int*)

  - **nick** (*str*)

  - **message** (*str*)

### *async method* `approve(self, message = '')` {#NewFriendRequestEvent.approve}

同意请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

### *async method* `refuse(self, message = '', black_list = False)` {#NewFriendRequestEvent.refuse}

拒绝请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

  - **black_list** (*bool*) - 是否加入黑名单，默认为 `False`。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

## *class* `MemberJoinRequestEvent`(self, adapter, **data) {#MemberJoinRequestEvent}

Bases: `iamai.adapter.mirai.event.request.RequestEvent`

用户入群申请（Bot需要有管理员权限）

- **Arguments**

  - **adapter** (*~T_Adapter*) - 产生此事件的适配器对象。

  - ****data** (*Any*) - 事件数据。

- **Attributes**

  - **type** (*Literal['MemberJoinRequestEvent']*)

  - **eventId** (*int*)

  - **fromId** (*int*)

  - **groupId** (*int*)

  - **groupName** (*str*)

  - **nick** (*str*)

  - **message** (*str*)

### *async method* `approve(self, message = '')` {#MemberJoinRequestEvent.approve}

同意请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

### *async method* `ignore(self, message = '', black_list = False)` {#MemberJoinRequestEvent.ignore}

忽略请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

  - **black_list** (*bool*) - 是否加入黑名单，默认为 `False`。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

### *async method* `refuse(self, message = '', black_list = False)` {#MemberJoinRequestEvent.refuse}

拒绝请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

  - **black_list** (*bool*) - 是否加入黑名单，默认为 `False`。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

## *class* `BotInvitedJoinGroupRequestEvent`(self, adapter, **data) {#BotInvitedJoinGroupRequestEvent}

Bases: `iamai.adapter.mirai.event.request.RequestEvent`

Bot 被邀请入群申请

- **Arguments**

  - **adapter** (*~T_Adapter*) - 产生此事件的适配器对象。

  - ****data** (*Any*) - 事件数据。

- **Attributes**

  - **type** (*Literal['BotInvitedJoinGroupRequestEvent']*)

  - **eventId** (*int*)

  - **fromId** (*int*)

  - **groupId** (*int*)

  - **groupName** (*str*)

  - **nick** (*str*)

  - **message** (*str*)

### *async method* `approve(self, message = '')` {#BotInvitedJoinGroupRequestEvent.approve}

同意请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。

### *async method* `refuse(self, message = '')` {#BotInvitedJoinGroupRequestEvent.refuse}

拒绝请求。

- **Arguments**

  - **message** (*str*) - 回复的信息，默认为空。

- **Returns**

  Type: *Dict[str, Any]*

  API 请求响应。