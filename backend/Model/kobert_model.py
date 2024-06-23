from transformers import BertModel
import torch

class KoBERTClassifier(torch.nn.Module):
    def __init__(self, num_classes):
        super(KoBERTClassifier, self).__init__()
        self.bert = BertModel.from_pretrained('skt/kobert-base-v1')
        self.classifier = torch.nn.Linear(self.bert.config.hidden_size, num_classes)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        cls_output = outputs.pooler_output
        logits = self.classifier(cls_output)
        return logits