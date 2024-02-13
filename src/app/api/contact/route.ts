import { sendEmail } from '@/service/email';
import * as yup from 'yup';
import { NextResponse } from 'next/server';

const bosySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bosySchema.isValidSync(body)) {
    return NextResponse.json({ message: '메일전송에 실패함' }, { status: 400 });
  }

  return sendEmail(body) //
    .then(() => {
      return NextResponse.json(
        { message: '메일을 성공적으로 보냈음' },
        { status: 200 }
      );
    })
    .catch((error) => {
      console.log(error);
      return NextResponse.json(
        { message: '메일전송에 실패함' },
        { status: 500 }
      );
    });
}
