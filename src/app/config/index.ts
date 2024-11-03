
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });


export default {
    server_port:process.env.SERVER_PORT_NUMBER,
    server_status:process.env.SERVER_STATUS,
    
}