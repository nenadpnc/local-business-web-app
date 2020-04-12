"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const express_static_gzip_1 = __importDefault(require("express-static-gzip"));
const logger_1 = __importDefault(require("./logger"));
const port = parseInt(process.env.PORT || '3002', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev, dir: './client' });
const handle = app.getRequestHandler();
app
    .prepare()
    .then(() => {
    const expressServer = express_1.default();
    if (!dev) {
        // serve gziped files in production
        expressServer.use('/_next', express_static_gzip_1.default('./_next'));
    }
    expressServer.get('*', (req, res) => handle(req, res));
    expressServer.listen(port, (err) => {
        if (err) {
            logger_1.default.error('something bad happened', err);
        }
        else {
            logger_1.default.info(`> Ready on http://localhost:${port}`);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixzREFBOEI7QUFDOUIsOEVBQW9EO0FBQ3BELHNEQUE4QjtBQUU5QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQztBQUNsRCxNQUFNLEdBQUcsR0FBRyxjQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDM0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFFdkMsR0FBRztLQUNBLE9BQU8sRUFBRTtLQUNULElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDVCxNQUFNLGFBQWEsR0FBRyxpQkFBTyxFQUFFLENBQUM7SUFFaEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLG1DQUFtQztRQUNuQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSw2QkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEdBQUcsRUFBRTtZQUNQLGdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxnQkFBTSxDQUFDLElBQUksQ0FBQywrQkFBK0IsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==