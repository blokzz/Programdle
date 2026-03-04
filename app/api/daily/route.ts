import { NextResponse } from 'next/server';
import { getDailyLanguage } from '../../utils/daily';

export const dynamic = 'force-dynamic';

export async function GET() {
    const daily = getDailyLanguage();
    return NextResponse.json(daily);
}