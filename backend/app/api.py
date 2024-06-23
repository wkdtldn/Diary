from db_models import *

# User ---
def sign_up(name, password):
    users = User.query.filter_by(name=name)

    if not users:
        new_user = User(name=name, password=password)
        db.session.add(new_user)
        db.session.commit()
        return {'msg' : 'sign up success'}

    return {'msg' : 'try another name'}

def login(name, password):
    user = User.query.filter_by(name=name)

    if user:
        if password == user.password:
            return True
        return {'msg' : 'wront pasword'}
    return {'msg' : 'wrong name'}

# Diary ---
def my_diary(name):
    user_id = User.query.filter_by(name=name).id

    diarys = Diary.query.filter_by(user_id=user_id).all()

    diary_list = []

    if diarys:
        for diary in diarys:
            diary_list.append(
                {'id' : diary.id,
                 'user_id' : diary.user_id,
                 'title' : diary.title,
                 'detail' : diary.detail,
                 'date' : diary.date,
                 'time' : diary.time}
            )
    return diary_list

def write(name, title, detail, date, time):
    user_id = User.query.filter_by(name=name).id

    new_diary = Diary(user_id=user_id, title=title, detail=detail, date=date, time=time)
    db.session.add(new_diary)
    db.session.commit()
    return {'msg' : 'new diary write'}

def get_all_diary():
    diarys = Diary.query.all()

    diary_list = []

    if diarys:
        for diary in diarys:
            diary_list.append(
                {'id' : diary.id,
                 'user_id' : diary.user_id,
                 'title' : diary.title,
                 'detail' : diary.detail,
                 'date' : diary.date,
                 'time' : diary.time}
            )
    return diary_list