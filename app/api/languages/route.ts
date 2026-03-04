import { NextResponse } from 'next/server';
import { LANGUAGES } from '../../data/languages';

export async function GET() {
    const safeLanguages = LANGUAGES.map(({ snippets, ...rest }) => rest);

    return NextResponse.json(safeLanguages);
}