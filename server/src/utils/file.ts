import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

export const createFile = async () => {
  try {
    const filePath = 'config.json'
    let config : any = {}

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8')
      config = JSON.parse(content)
    }

    if (!config.secret_key) {
      config.secret_key = uuidv4()
      fs.writeFileSync(filePath, JSON.stringify(config, null, 2))
      console.log('✅ secret_key berhasil di-generate.')
    } else {
      console.log('✅ secret_key sudah ada, tidak diubah.')
    }
  } catch (error) {
    console.error('❌ Gagal update config.json:', error)
  }
}
