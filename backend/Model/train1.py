from kobert_dataset import KoBERTDataset
from kobert_model import KoBERTClassifier
from data_loader import Dataset
from transformers import AdamW
import torch
from torch.utils.data import DataLoader

train, test = Dataset().train, Dataset().test
train = Dataset().preprocess(train)
test = Dataset().preprocess(test)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

max_len = 128
batch_size = 64
num_epochs = 10
num_classes = 2
learning_rate = 1e-5

dataset = KoBERTDataset(train, 'document', 'label', max_len=max_len)

dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

model = KoBERTClassifier(num_classes=num_classes).to(device)
optimizer = AdamW(model.parameters(), lr=learning_rate)
loss_fn = torch.nn.CrossEntropyLoss()

model.train()
for epoch in range(num_epochs):
    total_loss = 0
    for batch in dataloader:
        optimizer.zero_grad()

        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['label'].to(device)

        outputs = model(input_ids=input_ids, attention_mask=attention_mask)
        loss = loss_fn(outputs, labels)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

        print(f'Loss: {loss.item()}')

    print(f'Epoch {epoch + 1}/{num_epochs}, Loss: {total_loss/len(dataloader)}')