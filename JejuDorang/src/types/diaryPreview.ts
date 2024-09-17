type diaryStatus = 'Private'|'Public';

export interface DiaryPreview {
    title: string;
    content: string;
    status: diaryStatus;
}