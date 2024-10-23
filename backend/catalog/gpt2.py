from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = None
model = None

def initialize():
    global tokenizer, model
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
    model = GPT2LMHeadModel.from_pretrained("gpt2")
    model.eval()