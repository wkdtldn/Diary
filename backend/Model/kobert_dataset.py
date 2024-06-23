from torchtext import data as data
from kobert_tokenizer import KoBERTTokenizer
from torch.utils.data import Dataset
import torch

class KoBERTDataset(Dataset):
    def __init__(self, df, texts, labels, max_len):
        self.df = df
        self.texts = texts  # text column
        self.labels = labels    # label column
        self.tokenizer = KoBERTTokenizer.from_pretrained('skt/kobert-base-v1')
        self.max_len = max_len
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        text = self.df.iloc[idx][self.texts]
        label = self.df.iloc[idx][self.labels]

        encoding = self.tokenizer(
            text,
            padding='max_length',
            truncation=True,
            max_length=self.max_len,
            return_tensors='pt'
        )

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'label': torch.tensor(label, dtype=torch.long)
        }