import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className='container'>
            <div className='flex flex-col space-y-14'>
                <header className='flex items-center justify-between py-4 border-b border-gray-100 dark:border-slate-800'>
                    <Link href='/'>
                        <b>Learn React with AI</b>
                    </Link>

                    <div>
                        <Button>
                            <Link href='/auth/sign-in'>
                                Sign In
                            </Link>
                        </Button>
                    </div>
                </header>

                <div className='flex flex-col space-y-8'>
                    <div className='flex justify-center'>
                        <span className='py-2 px-4 rounded-full shadow dark:shadow-gray-500 text-sm'>
                            Learn React better, faster. Start for free.
                        </span>
                    </div>

                    <h1 className='text-4xl lg:text-6xl 2xl:text-7xl font-semibold text-center max-w-4xl mx-auto'>
                        Learn React using GPT-4
                    </h1>

                    <h2 className='text-center text-lg xl:text-2xl text-gray-400  font-light'>
                        <p>
                            AITR is a tool that helps you learn react with the help of GPT-4.
                        </p>

                        <p>
                            Use AI to generate react content according to your needs, do excercises, and see the output of your code instantly.
                        </p>

                        <p>
                            Start for free, upgrade when you&apos;re ready.
                        </p>
                    </h2>
                </div>

                <div className='flex flex-col space-y-3'>
                    <div className='flex space-x-2 justify-center'>
                        <Button>
                            <Link href='/auth/sign-up'>
                                Create an Account
                            </Link>
                        </Button>

                        <Button variant={'ghost'}>
                            <Link href='/auth/sign-in'>
                                Sign In
                            </Link>
                        </Button>
                    </div>

                    <p className='text-center text-xs text-gray-400'>
                        Start for free, no credit card required.
                    </p>
                </div>

                <hr className='border-gray-100 dark:border-slate-800' />

                <div className='flex flex-col space-y-12'>
                    <div className='flex flex-col space-y-2'>
                        <h2 className='text-2xl font-semibold text-center'>
                            The best way to learn React
                        </h2>

                        <h3 className='text-lg text-center text-gray-400'>
                            Your first 5,000 tokens are on us
                        </h3>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                        <div className='flex flex-col space-y-1'>
                            <h3 className='text-xl font-medium'>
                                1. Create an Account
                            </h3>

                            <div>
                                Create an Account to unlock your first 5,000 tokens for free.
                            </div>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <h3 className='text-xl font-medium'>
                                2. Create your own lectures
                            </h3>

                            <div>
                                Use AI to teach you react, and give you excercises adapting to your level, seeing the output of your code.
                            </div>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <h3 className='text-xl font-medium'>
                                3. Subscribe
                            </h3>

                            <div>
                                Subscribe to unlock more tokens and get beta access to new features.
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='border-gray-100 dark:border-slate-800' />

                <hr className='border-gray-100 dark:border-slate-800' />

                <footer className='py-6'>
                    <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-between'>
                        <div>
                            <b>Learn React with GPT-4</b>
                            <div>
                                Your own AI professor - {new Date().getFullYear()}
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <Button variant='link'>
                                <Link href='/auth/sign-in'>
                                    Sign In
                                </Link>
                            </Button>

                            <Button variant='link'>
                                <Link href='/auth/sign-up'>
                                    Create an Account
                                </Link>
                            </Button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
