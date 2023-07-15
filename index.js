const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');


/**
 * how to get secret token for creating a bot?
 * ->open telegram search for BotFather
 * ->to read instruction type /start and press enter
 * ->to create a new bot type /newbot and press enter
 * ->give name of bot and give user name
 * -> url for my bot to connet ---> "t.me/Code_with_me_bot"
 */
const bot = new Telegraf('6149826327:AAEFiY_VWjPXWlV29ldYsUSUvz-Gd52gVV8');
bot.start((ctx) => ctx.reply('Welcome to new Coding Bot from Pratik'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

//using axios get binary search from github ripo.
bot.command('binarysearch',  async (ctx) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/pratikprakhar1/Coding/master/binary_search.cpp');
        ctx.reply(response.data);
        
      } catch (error) {
        console.error(error);
      }
    
    });
//using axios get insertionsort from github ripo.
bot.command('insertionsort',  async (ctx) => {
    try {
            const response = await axios.get('https://raw.githubusercontent.com/pratikprakhar1/Coding/master/insertion_sort.cpp');
            ctx.reply(response.data);
            
      } catch (error) {
            console.error(error);
      }
        
    });
//using axios get selectionsort from github ripo.
bot.command('selectionsort',  async (ctx) => {
    try {
            const response = await axios.get('https://raw.githubusercontent.com/pratikprakhar1/Coding/master/selection_sort.cpp');
            ctx.reply(response.data);
            
        } catch (error) {
            console.error(error);
        }
        
    });
//using axios get bubblesort from github ripo.    
bot.command('bubblesort',  async (ctx) => {
    try {
            const response = await axios.get('https://raw.githubusercontent.com/pratikprakhar1/Coding/master/bubble_sort.cpp');
            ctx.reply(response.data);
                
        } catch (error) {
            console.error(error);
        }
            
    }); 
    
//using axios get mergesort from github ripo.
bot.command('mergesort',  async (ctx) => {
    try {
            const response = await axios.get('https://raw.githubusercontent.com/pratikprakhar1/Coding/master/merge_sort.cpp');
            ctx.reply(response.data);
                    
        } catch (error) {
            console.error(error);
        }
                
    });     
    
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.launch();
