exports.run = async (client, message) => {

    function formatFileSize(bytes, decimalPoint) {
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimalPoint || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    //Sends message while the json's are being cached
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .addField(`__**Please wait...**__`, `Loading all node's stats! (If this takes longer than 5seconds. This command is broken)`, true);
    let msg = await message.channel.send(embed)

    //Edits the message to display the data
    embed.fields.pop()
    embed.addField("\u200b", "__**[Node 1 - Bots, Websites and Databases](https://danbot.host/Node1)**__ \n**CPU LOAD**: " + nodeData.fetch("Node1.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node1.memused") + " / " + nodeData.fetch("Node1.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node1.diskused") + " / " + nodeData.fetch("Node1.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node1.osuptime") + "\n**Servers:** **Total**: " + nodeData.fetch("Node1.dockercontainers") + ", **Running**: " + nodeData.fetch("Node1.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node1.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 2 - Bots, Websites and Databases](https://danbot.host/Node2)**__ \n**CPU LOAD**: " + nodeData.fetch("Node2.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node2.memused") + " / " + nodeData.fetch("Node2.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node2.diskused") + " / " + nodeData.fetch("Node2.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node2.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node2.dockercontainers") + ", **Running**: " + nodeData.fetch("Node2.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node2.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 3 - Gaming](https://danbot.host/Node3)**__ \n**CPU LOAD**: " + nodeData.fetch("Node3.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node3.memused") + " / " + nodeData.fetch("Node3.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node3.diskused") + " / " + nodeData.fetch("Node3.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node3.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node3.dockercontainers") + ", **Running**: " + nodeData.fetch("Node3.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node3.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 4 - Test](https://danbot.host/Node4)**__ \n**CPU LOAD**: " + nodeData.fetch("Node4.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node4.memused") + " / " + nodeData.fetch("Node4.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node4.diskused") + " / " + nodeData.fetch("Node4.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node4.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node4.dockercontainers") + ", **Running**: " + nodeData.fetch("Node4.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node4.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 5 - Bots, Websites and Databases](https://danbot.host/Node5)**__ \n**CPU LOAD**: " + nodeData.fetch("Node5.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node5.memused") + " / " + nodeData.fetch("Node5.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node5.diskused") + " / " + nodeData.fetch("Node5.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node5.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node5.dockercontainers") + ", **Running**: " + nodeData.fetch("Node5.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node5.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 6 - Bots, Websites and Databases](https://danbot.host/Node6)**__ \n**CPU LOAD**: " + nodeData.fetch("Node6.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node6.memused") + " / " + nodeData.fetch("Node6.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node6.diskused") + " / " + nodeData.fetch("Node6.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node6.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node6.dockercontainers") + ", **Running**: " + nodeData.fetch("Node6.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node6.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField("\u200b", "__**[Node 7 - Donator Node](https://danbot.host/Node7)**__ \n**CPU LOAD**: " + nodeData.fetch("Node7.cpuload") + "% \n**RAM (USED/TOTAL)**: " + nodeData.fetch("Node7.memused") + " / " + nodeData.fetch("Node7.memtotal") + " \n**STORAGE (USED/TOTAL)**: " + nodeData.fetch("Node7.diskused") + " / " + nodeData.fetch("Node7.disktotal") + " \n**UPTIME**: " + nodeData.fetch("Node7.osuptime") + "\n**Servers**: **Total**: " + nodeData.fetch("Node7.dockercontainers") + ", **Running**: " + nodeData.fetch("Node7.dockercontainersrunning") + ", **Stopped**: " + nodeData.fetch("Node7.dockercontainersstopped"))
    embed.addField('\u200b', '\u200b')
    embed.addField('\u200b', `__**Total Usage:**__ \nRam Total: ${formatFileSize(parseFloat(nodeData.fetch("Node1.memusedraw")) + parseFloat(nodeData.fetch("Node2.memusedraw")) + parseFloat(nodeData.fetch("Node3.memusedraw")) + parseFloat(nodeData.fetch("Node4.memusedraw")) + parseFloat(nodeData.fetch("Node5.memusedraw")) + parseFloat(nodeData.fetch("Node7.memused")))} out of ${formatFileSize(Math.floor(parseFloat(nodeData.fetch("Node1.memtotalraw")) + parseFloat(nodeData.fetch("Node2.memtotalraw")) + parseFloat(nodeData.fetch("Node3.memtotalraw")) + parseFloat(nodeData.fetch("Node4.memtotalraw")) + parseFloat(nodeData.fetch("Node5.memtotalraw")) + parseFloat(nodeData.fetch("Node7.memtotalraw"))), 2)} ` +
        `\n__**Disk Total:**__ ` +
        `\n${formatFileSize(parseFloat(nodeData.fetch("Node1.diskusedraw")) + parseFloat(nodeData.fetch("Node2.diskusedraw")) + parseFloat(nodeData.fetch("Node3.diskusedraw")) + parseFloat(nodeData.fetch("Node4.diskusedraw")) + parseFloat(nodeData.fetch("Node5.diskusedraw")) + parseFloat(nodeData.fetch("Node7.diskused")), 2)} ` +
        `out of ${formatFileSize(parseFloat(nodeData.fetch("Node1.disktotalraw")) + parseFloat(nodeData.fetch("Node2.disktotalraw")) + parseFloat(nodeData.fetch("Node3.disktotalraw")) + parseFloat(nodeData.fetch("Node4.disktotalraw")) + parseFloat(nodeData.fetch("Node5.disktotalraw")) + parseFloat(nodeData.fetch("Node7.disktotalraw")), 2)}`)
    embed.setDescription('Want to view more stats live? [Click Here!](https://danbot.host/stats)')
    msg.edit(embed);
};