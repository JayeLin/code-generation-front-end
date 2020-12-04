import { JSEncrypt } from 'jsencrypt'
import md5 from 'md5'

const publicKey = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANNWw/7SmVyr+HUM34ogWRon+qTzaixo
WPe9lQ0+gNacQpRgyuyK9AT9CtvDEBf9afBEkM7TPvz2oPIVKh2wT2kCAwEAAQ==
-----END PUBLIC KEY-----`

const privateKey = `
-----BEGIN PRIVATE KEY-----
MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAUAwggE8AgEAAkEA01bD/tKZXKv4dQzf
iiBZGif6pPNqLGhY972VDT6A1pxClGDK7Ir0BP0K28MQF/1p8ESQztM+/Pag8hUq
HbBPaQIDAQABAkEApkyWOcSabXPdNK4GkPhXZN+kuXvZRkxuBbQmv585XqV0T5iF
xA8GqY6AuaYeIqH9Q6pqkmWGgTvAJyldZnZWSQIhAPjjZQ5N5TqYjMIPfmFxjA3f
EWm0y2VikP3vk8J5Tf6jAiEA2WCzCQ3wa8CBWYGksw35WPEGIH7P1xt7nvbm2VTX
FoMCIDzw+PqSqjE5zyVpQ8m6Us/Gse3PHgp6IwR6mBSDPUy/AiEAs7HcTn/XXzuj
sfoZzGqg1YVpKzOpXIi7iI1SCBa6N0ECIQD3TQuZePoVF0rdG0GaoDcyX04hq8yI
kHAnxquNalOzlA==
-----END PRIVATE KEY-----`

export interface PublicKeyEncrypt {
  encrypt(ctx: any): any;
  decrypt(sign: string): any;
  md5Encrypt(passwords: string | string[]): any;
}

const publicKeyEncryptService: PublicKeyEncrypt = {
  encrypt (ctx: any) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(ctx)
  },
  decrypt (sign: string) {
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(privateKey)
    return decrypt.decrypt(sign)
  },
  /**
   * @description MD5加密方式
   * @param passwords 需要加密的密码
   */
  md5Encrypt (passwords: string | string[]) {
    const encrypt: any = md5 // 获得真正的md5可操作加密
    const saltEncrypt = (password: string): string => { // 定义一个通用的加密函数
      let pre: any = ''
      let middle: any = ''
      let suffix: any = ''
      let over: any = '' // 首部，中部，尾部，其余部分（出去结尾部分，皆需要加内容）
      pre = password.substring(0, 2), middle = password.substring(2, 4), suffix = password.substring(4, 6), over = password.substring(6)
      const saltPassword = `${pre}x1${middle}y2${suffix}z3${over}` // 加盐完毕的密码
      password = encrypt(saltPassword) // 进行md5加密
      return password
    }
    if (typeof passwords === 'string') {
      passwords = saltEncrypt(passwords)
    } else {
      for (const index in passwords) {
        if (passwords[index]) {
          passwords[index] = saltEncrypt(passwords[index])
        }
      }
    }
    return passwords
  }
}
export default publicKeyEncryptService
