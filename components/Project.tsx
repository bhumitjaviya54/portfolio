import SectionTitle from './SectionTitle'
import { devImg, playgridImg, todoImg } from '@/public/assets/inedx'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Project = () => {
    return (
        <section id='project' className='py-24 mx-auto max-w-container lgl:px-20'>
            <SectionTitle title='Some Things I have Built' titleNo='03' />
            <div className='flex flex-col items-center justify-between w-full mt-10 gap-28'>
                {/* Project one */}
                <div className='flex flex-col items-center justify-center w-full mt-10 gap-28'>
                    <div className='flex flex-col gap-6 xl:flex-row'>
                        <a className='relative w-full h-auto xl:w-1/2 group'
                            href="https://devvasvelia.netlify.app/" target='_blank'>
                            <div>
                                <Image
                                    className="object-contain w-full h-full"
                                    src={devImg}
                                    alt="devImg" />
                            </div>
                        </a>
                        <div className='z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16'>
                            <p className='text-sm font-titleFont text-textGreen -tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>Client Project</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                A Client {""} <span className='text-textGreen'>Portfolio</span> {""} Project is a tailored solution developed to meet a client`s specific needs, involving planning, development, and feedback to ensure alignment with their {""} <span className='text-textGreen'>goals</span>.
                            </p>
                            <ul className='flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark'>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>Netlify Deployment</li>
                            </ul>
                            <div className='flex gap-4 text-2xl'>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://github.com/bhumitjaviya54"
                                    target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://devvasvelia.netlify.app/"
                                    target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className='flex flex-col items-center justify-center w-full mt-10 gap-28'>
                    <div className='flex flex-col gap-6 xl:flex-row-reverse'>
                        <a className='relative w-full h-auto xl:w-1/2 group'
                            href="https://playgrid.netlify.app/" target='_blank'>
                            <div>
                                <Image
                                    className="object-contain w-full h-full"
                                    src={playgridImg}
                                    alt="playgridImg" />
                            </div>
                        </a>
                        <div className='z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16'>
                            <p className='text-sm font-titleFont text-textGreen -tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>Tic Tac Toe Game</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
                                Tic Tac Toe is a two-player game on a {""}
                                <span className='text-textGreen'>3x3</span>
                                {""} grid where players alternate marking spaces with {""}
                                <span className='text-textGreen'>X</span>
                                {""} or {""}
                                <span className='text-textGreen'>O</span>
                                {""} The first to get three in a row, column, or diagonal wins. If the grid fills with no winner, it`s a {""}
                                <span className='text-textGreen'>draw</span>.
                            </p>
                            <ul className='flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark'>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>Netlify Deployment</li>
                            </ul>
                            <div className='flex gap-4 text-2xl'>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://github.com/bhumitjaviya54"
                                    target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://playgrid.netlify.app/"
                                    target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Three */}
                <div className='flex flex-col items-center justify-center w-full mt-10 gap-28'>
                    <div className='flex flex-col gap-6 xl:flex-row'>
                        <a className='relative w-full h-auto xl:w-1/2 group'
                            href="https://flexlist.netlify.app/" target='_blank'>
                            <div>
                                <Image
                                    className="object-contain w-full h-full"
                                    src={todoImg}
                                    alt="todoImg" />
                            </div>
                        </a>
                        <div className='z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16'>
                            <p className='text-sm font-titleFont text-textGreen -tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>Todo App</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                A To-Do App is a task management tool that helps users organize and prioritize their {""}
                                <span className='text-textGreen'>daily tasks</span>. Key features include adding, editing, marking as complete, deleting tasks, and filtering by {""}
                                <span className='text-textGreen'>task status</span>.
                            </p>

                            <ul className='flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark'>
                                <li>Nextjs</li>
                                <li>TypeScript</li>
                                <li>Netlify Deployment</li>
                            </ul>
                            <div className='flex gap-4 text-2xl'>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://github.com/bhumitjaviya54"
                                    target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                <a
                                    className='duration-300 hover:text-textGreen'
                                    href="https://flexlist.netlify.app/"
                                    target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
