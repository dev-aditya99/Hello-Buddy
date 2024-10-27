import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// send message
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciever_id } = req.params;
        const sender_id = req.user._id;

        // find previous conversations 
        let conversation = await Conversation.findOne({
            participants: { $all: [sender_id, reciever_id] }
        })

        // if not any pervious conversations, let's create 
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [sender_id, reciever_id]
            })
        }

        // create new messages 
        const newMessage = new Message({
            sender_id,
            reciever_id,
            message
        })

        // if new message created, then push it into conversation's messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // and save both  
        await Promise.all([conversation.save(), newMessage.save()]);

        // return res.status(201).json({ msg: "Message Sent Successfully", id: req.params.id })
        return res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in SendMessage Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get message 
export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const sender_id = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [sender_id, userToChatId] }
        }).populate("messages");

        if (!conversation) res.status(201).json([]);

        const messages = conversation?.messages;

        res.status(201).json(messages);
    } catch (error) {
        console.error("Error in getMessages Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}