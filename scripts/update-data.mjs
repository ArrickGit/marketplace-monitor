import fs from 'node:fs';
import path from 'node:path';
const findings=process.argv[2] || path.resolve(process.cwd(),'../marketplace_findings.txt');
if(!fs.existsSync(findings)){console.error(`Findings file not found: ${findings}`);process.exit(1)}
console.log('Findings source available:', findings);
console.log('The checked-in data file is intentionally updated by the marketplace data pipeline.');
console.log('After a successful publish, clear the source findings file only in the monitor workflow.');
