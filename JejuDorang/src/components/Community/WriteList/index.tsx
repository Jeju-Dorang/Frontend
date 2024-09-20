import { postQuestion } from '@apis/community';
import { useState } from 'react';
import { MAX_TITLE_LENGTH, MAX_LIST_LENGTH } from '@constants/maxTextLength';

interface Props {
  handleModal: () => void;
  fetchQuestions: () => void;
}

const WriteList = ({ handleModal, fetchQuestions }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const res = await postQuestion(title, content);
    if (res === false) {
      alert('질문 작성에 실패했습니다.');
      return;
    }
    fetchQuestions();
    handleModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">제목</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, MAX_TITLE_LENGTH))}
          placeholder="제목을 입력하세요"
          maxLength={MAX_TITLE_LENGTH}
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <div className="text-right text-sm text-gray-500 mb-4">
          {title.length} / {MAX_TITLE_LENGTH}
        </div>

        <h2 className="text-lg font-semibold mb-2">내용</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, MAX_LIST_LENGTH))}
          placeholder="내용을 입력하세요"
          maxLength={MAX_LIST_LENGTH}
          className="w-full p-2 border border-gray-300 rounded-md mb-2 h-40 resize-none"
        />
        <div className="text-right text-sm text-gray-500 mb-4">
          {content.length} / {MAX_LIST_LENGTH}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={handleModal}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary-orange text-white rounded-md hover:bg-orange-600"
            disabled={title.trim() === '' || content.trim() === ''}
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteList;
