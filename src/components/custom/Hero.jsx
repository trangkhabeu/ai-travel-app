import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
	return (
		<div className='flex flex-col items-center mx-56 gap-9' >
			<h1 className='font-extrabold text-[60px] text-center mt-16'
			>
				<span className='text-[#f56551] whitespace-nowrap' > Khám phá cuộc phiêu lưu tiếp theo của bạn với AI: </span>  
				<br />Lộ trình được cá nhân hóa trong tầm tay bạn </h1>
			<p className='text-xl text-gray-500 text-center' >Người lập kế hoạch chuyến đi và quản lý chuyến đi cá nhân của bạn, tạo ra các hành trình tùy chỉnh phù hợp với sở thích và ngân sách của bạn.</p>	
			<Link to={'/create-trip'}>
				<Button>Bắt đầu thôi, free mà!</Button>
			</Link>
		</div>
	)
}

export default Hero