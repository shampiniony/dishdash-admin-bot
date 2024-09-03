import { Context, Telegraf } from 'telegraf';
import logger from '../utils/logger';
import { adminMiddleware } from '../middlewares/adminMiddleware';

export function setupHelpCommand(bot: Telegraf<Context>) {
    bot.help(adminMiddleware, (ctx) => {
        const username = ctx.from?.username || 'unknown';
        logger.info(`User ${username} used /help.`);
        ctx.reply('Список доступных команд:\n/start - начать\n/help - получить это сообщение');
    });
}
