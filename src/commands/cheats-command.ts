import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { trimIndent } from '../utils';
import { Command } from './Command';

export default class CheatsCommand extends Command {
    builder = new SlashCommandBuilder()
        .setName('cheats')
        .setDescription('Display a message that says not to cheat, and that we will not help you with your cheating'); 

    async execute(interaction: CommandInteraction): Promise<void> {
        const embed = this.makeEmbed(interaction)
            .setTitle('ChatTriggers Help Policy')
            .setDescription(
                trimIndent`
                    We will not help you in your efforts to write code that gives you an unfair advantage over other players. \
                    **We consider anything that goes against the Hypixel Network rules to be a cheat**, and will not help, even if it is "for singleplayer" or "for a different server". \
                    You can find the Hypixel rules [here](https://hypixel.net/rules).
                `,
            );

        this.send(interaction, embed);
    }
}
