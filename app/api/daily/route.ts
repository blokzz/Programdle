import { NextRequest, NextResponse } from 'next/server';
import { getDailyLanguage } from '../../utils/daily';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const dateParam = searchParams.get('date');
    let targetDate: Date | undefined = undefined;

    if (dateParam) {
        targetDate = new Date(dateParam);
    }

    const daily = getDailyLanguage(targetDate);
    return NextResponse.json(daily);
}