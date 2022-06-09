import { expect } from 'chai'
import uEmojiParser from '../src/index'


describe('Test emoji parser', () => {
  it('should parse emojis from unicode', () => {
    // (1) Smile 😀
    let text: string = '😀'
    let result: string = uEmojiParser.parse(text)
    expect(result).to.be.equal('<img class="emoji" draggable="false" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/>')

    // (2) Smile with smiling eyes 😄
    text = '😄'
    result = uEmojiParser.parse(text)
    expect(result).to.be.equal('<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')
  })

  it('should parse emojis from emoji code', () => {
    // (1) Smile 😀
    let text: string = ':smile:'
    let result: string = uEmojiParser.parse(text)
    expect(result).to.be.equal('<img class="emoji" draggable="false" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/>')

    // (2) Smile with smiling eyes 😄
    text = ':grinning_face_with_smiling_eyes:'
    result = uEmojiParser.parse(text)
    expect(result).to.be.equal('<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')
  })

  it('should parse a sentence with emojis from unicode and emoji code', () => {
    const text: string = 'A lot of emojis: 😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 :neckbeard: 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 :couplekiss: 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
    const result: string = uEmojiParser.parse(text)
    expect(result).to.be.string
    expect(result).to.be.equal('A lot of emojis: <img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/> <img class="emoji" draggable="false" alt="😆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f606.png"/> <img class="emoji" draggable="false" alt="😊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60a.png"/> <img class="emoji" draggable="false" alt="😃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f603.png"/> <img class="emoji" draggable="false" alt="☺️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/263a.png"/> <img class="emoji" draggable="false" alt="😏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60f.png"/> <img class="emoji" draggable="false" alt="😍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60d.png"/> <img class="emoji" draggable="false" alt="😘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f618.png"/> <img class="emoji" draggable="false" alt="😚" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61a.png"/> <img class="emoji" draggable="false" alt="😳" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f633.png"/> <img class="emoji" draggable="false" alt="😌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60c.png"/> <img class="emoji" draggable="false" alt="😆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f606.png"/> <img class="emoji" draggable="false" alt="😁" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f601.png"/> <img class="emoji" draggable="false" alt="😉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f609.png"/> <img class="emoji" draggable="false" alt="😜" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61c.png"/> <img class="emoji" draggable="false" alt="😝" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61d.png"/> <img class="emoji" draggable="false" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/> <img class="emoji" draggable="false" alt="😗" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f617.png"/> <img class="emoji" draggable="false" alt="😙" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f619.png"/> <img class="emoji" draggable="false" alt="😛" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61b.png"/> <img class="emoji" draggable="false" alt="😴" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f634.png"/> <img class="emoji" draggable="false" alt="😟" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61f.png"/> <img class="emoji" draggable="false" alt="😦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f626.png"/> <img class="emoji" draggable="false" alt="😧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f627.png"/> <img class="emoji" draggable="false" alt="😮" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62e.png"/> <img class="emoji" draggable="false" alt="😬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62c.png"/> <img class="emoji" draggable="false" alt="😕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f615.png"/> <img class="emoji" draggable="false" alt="😯" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62f.png"/> <img class="emoji" draggable="false" alt="😑" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f611.png"/> <img class="emoji" draggable="false" alt="😒" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f612.png"/> <img class="emoji" draggable="false" alt="😅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f605.png"/> <img class="emoji" draggable="false" alt="😓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f613.png"/> <img class="emoji" draggable="false" alt="😥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f625.png"/> <img class="emoji" draggable="false" alt="😩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f629.png"/> <img class="emoji" draggable="false" alt="😔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f614.png"/> <img class="emoji" draggable="false" alt="😞" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61e.png"/> <img class="emoji" draggable="false" alt="😖" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f616.png"/> <img class="emoji" draggable="false" alt="😨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f628.png"/> <img class="emoji" draggable="false" alt="😰" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f630.png"/> <img class="emoji" draggable="false" alt="😣" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f623.png"/> <img class="emoji" draggable="false" alt="😢" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f622.png"/> <img class="emoji" draggable="false" alt="😭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62d.png"/> <img class="emoji" draggable="false" alt="😂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f602.png"/> <img class="emoji" draggable="false" alt="😲" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f632.png"/> <img class="emoji" draggable="false" alt="😱" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f631.png"/> :neckbeard: <img class="emoji" draggable="false" alt="😫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62b.png"/> <img class="emoji" draggable="false" alt="😠" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f620.png"/> <img class="emoji" draggable="false" alt="😡" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f621.png"/> <img class="emoji" draggable="false" alt="😤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f624.png"/> <img class="emoji" draggable="false" alt="😪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62a.png"/> <img class="emoji" draggable="false" alt="😋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60b.png"/> <img class="emoji" draggable="false" alt="😷" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f637.png"/> <img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" draggable="false" alt="😵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f635.png"/> <img class="emoji" draggable="false" alt="👿" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47f.png"/> <img class="emoji" draggable="false" alt="😈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f608.png"/> <img class="emoji" draggable="false" alt="😐" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f610.png"/> <img class="emoji" draggable="false" alt="😶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f636.png"/> <img class="emoji" draggable="false" alt="😇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f607.png"/> <img class="emoji" draggable="false" alt="👽" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47d.png"/> <img class="emoji" draggable="false" alt="💛" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49b.png"/> <img class="emoji" draggable="false" alt="💙" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f499.png"/> <img class="emoji" draggable="false" alt="💜" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49c.png"/> <img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2764.png"/> <img class="emoji" draggable="false" alt="💚" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49a.png"/> <img class="emoji" draggable="false" alt="💔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f494.png"/> <img class="emoji" draggable="false" alt="💓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f493.png"/> <img class="emoji" draggable="false" alt="💗" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f497.png"/> <img class="emoji" draggable="false" alt="💕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f495.png"/> <img class="emoji" draggable="false" alt="💞" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49e.png"/> <img class="emoji" draggable="false" alt="💘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f498.png"/> <img class="emoji" draggable="false" alt="💖" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f496.png"/> <img class="emoji" draggable="false" alt="✨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2728.png"/> <img class="emoji" draggable="false" alt="⭐️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2b50.png"/> <img class="emoji" draggable="false" alt="🌟" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f31f.png"/> <img class="emoji" draggable="false" alt="💫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ab.png"/> <img class="emoji" draggable="false" alt="💥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a5.png"/> <img class="emoji" draggable="false" alt="💥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a5.png"/> <img class="emoji" draggable="false" alt="💢" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a2.png"/> <img class="emoji" draggable="false" alt="❗️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2757.png"/> <img class="emoji" draggable="false" alt="❓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2753.png"/> <img class="emoji" draggable="false" alt="❕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2755.png"/> <img class="emoji" draggable="false" alt="❔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2754.png"/> <img class="emoji" draggable="false" alt="💤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a4.png"/> <img class="emoji" draggable="false" alt="💨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a8.png"/> <img class="emoji" draggable="false" alt="💦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a6.png"/> <img class="emoji" draggable="false" alt="🎶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3b6.png"/> <img class="emoji" draggable="false" alt="🎵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3b5.png"/> <img class="emoji" draggable="false" alt="🔥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f525.png"/> <img class="emoji" draggable="false" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" draggable="false" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" draggable="false" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" draggable="false" alt="👍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44d.png"/> <img class="emoji" draggable="false" alt="👍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44d.png"/> <img class="emoji" draggable="false" alt="👎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44e.png"/> <img class="emoji" draggable="false" alt="👎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44e.png"/> <img class="emoji" draggable="false" alt="👌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44c.png"/> <img class="emoji" draggable="false" alt="👊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44a.png"/> <img class="emoji" draggable="false" alt="👊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44a.png"/> <img class="emoji" draggable="false" alt="✊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270a.png"/> <img class="emoji" draggable="false" alt="✌️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270c.png"/> <img class="emoji" draggable="false" alt="👋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44b.png"/> <img class="emoji" draggable="false" alt="✋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270b.png"/> <img class="emoji" draggable="false" alt="✋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270b.png"/> <img class="emoji" draggable="false" alt="👐" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f450.png"/> <img class="emoji" draggable="false" alt="☝️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/261d.png"/> <img class="emoji" draggable="false" alt="👇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f447.png"/> <img class="emoji" draggable="false" alt="👈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f448.png"/> <img class="emoji" draggable="false" alt="👉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f449.png"/> <img class="emoji" draggable="false" alt="🙌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64c.png"/> <img class="emoji" draggable="false" alt="🙏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64f.png"/> <img class="emoji" draggable="false" alt="👆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f446.png"/> <img class="emoji" draggable="false" alt="👏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44f.png"/> <img class="emoji" draggable="false" alt="💪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4aa.png"/> <img class="emoji" draggable="false" alt="🤘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f918.png"/> <img class="emoji" draggable="false" alt="🖕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f595.png"/> <img class="emoji" draggable="false" alt="🚶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f6b6.png"/> <img class="emoji" draggable="false" alt="🏃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3c3.png"/> <img class="emoji" draggable="false" alt="🏃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3c3.png"/> <img class="emoji" draggable="false" alt="👫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46b.png"/> <img class="emoji" draggable="false" alt="👪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46a.png"/> <img class="emoji" draggable="false" alt="👬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46c.png"/> <img class="emoji" draggable="false" alt="👭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46d.png"/> <img class="emoji" draggable="false" alt="💃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f483.png"/> <img class="emoji" draggable="false" alt="👯" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46f.png"/> <img class="emoji" draggable="false" alt="🙆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f646.png"/> <img class="emoji" draggable="false" alt="🙅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f645.png"/> <img class="emoji" draggable="false" alt="💁" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f481.png"/> <img class="emoji" draggable="false" alt="🙋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64b.png"/> <img class="emoji" draggable="false" alt="👰" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f470.png"/> <img class="emoji" draggable="false" alt="🙎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64e.png"/> <img class="emoji" draggable="false" alt="🙍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64d.png"/> <img class="emoji" draggable="false" alt="🙇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f647.png"/> :couplekiss: <img class="emoji" draggable="false" alt="💑" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f491.png"/> <img class="emoji" draggable="false" alt="💆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f486.png"/> <img class="emoji" draggable="false" alt="💇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f487.png"/> <img class="emoji" draggable="false" alt="💅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f485.png"/> <img class="emoji" draggable="false" alt="👦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f466.png"/> <img class="emoji" draggable="false" alt="👧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f467.png"/> <img class="emoji" draggable="false" alt="👩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f469.png"/> <img class="emoji" draggable="false" alt="👨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f468.png"/> <img class="emoji" draggable="false" alt="👶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f476.png"/> <img class="emoji" draggable="false" alt="👵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f475.png"/> <img class="emoji" draggable="false" alt="👴" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f474.png"/> <img class="emoji" draggable="false" alt="👱" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f471.png"/> <img class="emoji" draggable="false" alt="👲" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f472.png"/> <img class="emoji" draggable="false" alt="👳" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f473.png"/> <img class="emoji" draggable="false" alt="👷" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f477.png"/> <img class="emoji" draggable="false" alt="👮" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46e.png"/> <img class="emoji" draggable="false" alt="👼" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47c.png"/> <img class="emoji" draggable="false" alt="👸" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f478.png"/> <img class="emoji" draggable="false" alt="😺" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63a.png"/> <img class="emoji" draggable="false" alt="😸" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f638.png"/> <img class="emoji" draggable="false" alt="😻" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63b.png"/> <img class="emoji" draggable="false" alt="😽" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63d.png"/> <img class="emoji" draggable="false" alt="😼" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63c.png"/> <img class="emoji" draggable="false" alt="🙀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f640.png"/> <img class="emoji" draggable="false" alt="😿" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63f.png"/> <img class="emoji" draggable="false" alt="😹" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f639.png"/> <img class="emoji" draggable="false" alt="😾" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63e.png"/> <img class="emoji" draggable="false" alt="👹" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f479.png"/> <img class="emoji" draggable="false" alt="👺" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47a.png"/> <img class="emoji" draggable="false" alt="🙈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f648.png"/> <img class="emoji" draggable="false" alt="🙉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f649.png"/> <img class="emoji" draggable="false" alt="🙊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64a.png"/> <img class="emoji" draggable="false" alt="💂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f482.png"/> <img class="emoji" draggable="false" alt="💀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f480.png"/> <img class="emoji" draggable="false" alt="🐾" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f43e.png"/> <img class="emoji" draggable="false" alt="👄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f444.png"/> <img class="emoji" draggable="false" alt="💋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f48b.png"/> <img class="emoji" draggable="false" alt="💧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a7.png"/> <img class="emoji" draggable="false" alt="👂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f442.png"/> <img class="emoji" draggable="false" alt="👀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f440.png"/> <img class="emoji" draggable="false" alt="👃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f443.png"/> <img class="emoji" draggable="false" alt="👅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f445.png"/> <img class="emoji" draggable="false" alt="💌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f48c.png"/> <img class="emoji" draggable="false" alt="👤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f464.png"/> <img class="emoji" draggable="false" alt="👥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f465.png"/> <img class="emoji" draggable="false" alt="💬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ac.png"/> <img class="emoji" draggable="false" alt="💭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ad.png"/>')
  })

  it('Test emoji parser if exist only in keywords search', () => {
    const text: string = ':thumbsup:'
    const result: string = uEmojiParser.parse(text)
    expect(result).to.be.equal('<img class="emoji" draggable="false" alt="👍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44d.png"/>')
  })

  it('should throw error with not string parameter', () => {
    let text: any = undefined  // eslint-disable-line
    expect(() => {
      uEmojiParser.parse(text)
    }).to.throw(Error)

    text = 13

    expect(() => {
      uEmojiParser.parse(text)
    }).to.throw(Error)
  })

})