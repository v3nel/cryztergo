import fs from 'fs';
import path from 'path';
import pool from './db.js';

const __dirname = path.resolve(); // si tu es en ESM

(async () => {
  try {
    const [rows] = await pool.query('SELECT name, channel_id FROM channel_ids');

    const lines = rows.map(row => 
      `export const ${row.name.toUpperCase()} = '${row.channel_id}';`
    );

    const content = `// ⚠️ Ce fichier est généré automatiquement. Ne pas modifier manuellement.\n` +
                    lines.join('\n') + '\n';

    const targetPath = path.join(__dirname, 'core', 'channelids.js');
    fs.writeFileSync(targetPath, content);
    console.log('✅ core/channelids.js généré avec succès.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur génération dynamicChannels.js:', err);
    process.exit(1);
  }
})();

