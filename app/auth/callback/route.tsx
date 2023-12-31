import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
        const client = createRouteHandlerClient({ cookies });

        await client.auth.exchangeCodeForSession(code);
    }

    return redirect('/lecture')
}