
[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) 

# Google-Chat-Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `googleChatRoom`

**Required** The name of the Google Chat Room.

### `googleChatKey`

**Required** Google Chat Webhook Key.

### `googleChatToken`

**Required** Google Chat Webhook Token.

### `message`

**Required** Message Text to be sent to Google Chat.

## Outputs

### `status`

Status code returned by Google Chat

### `statusText`

Text of Status code returned by Google Chat

## Example usage

````
    uses: actions/Google-Chat-Action@v1
    with:
        googleChatRoom: 'xxxxxxx'
        googleChatKey: 'yyyyyyyy'
        googleChatToken: 'zzzzzz'
        message: 'text text'
```