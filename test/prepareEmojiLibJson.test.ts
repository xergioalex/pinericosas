import { expect } from 'chai'
import { EmojiLibJsonType, ObjectType } from '../src/lib/type'
import emojilib from 'emojilib'
import unicodeEmojiJson from 'unicode-emoji-json'


describe('Prepare emoji parser assets', () => {
  /**
   * This test allows you to recreate the emoji-lib.json file,
   * which contains the definition of all unicode emojis with their respective aliases.
   *
   * Note: By default this test is disabled, reactivate it only if you need to regenerate the file.
   ***/
  it.skip('create emojis lib json file', () => {
    let unicodeEmojiJsonData: ObjectType = unicodeEmojiJson
    let keywordSet: ObjectType = emojilib
    for (const emoji in unicodeEmojiJsonData) {
      unicodeEmojiJsonData[emoji].char = emoji
      unicodeEmojiJsonData[emoji].keywords = keywordSet[emoji]
    }
    let emojilibjson: EmojiLibJsonType = unicodeEmojiJsonData
    const fs = require('fs')
    let filePath: string = 'src/lib/emoji-lib-output.json'
    fs.writeFileSync(filePath, JSON.stringify(emojilibjson, null, 2))
    expect(fs.existsSync(filePath)).to.be.true
  })
})