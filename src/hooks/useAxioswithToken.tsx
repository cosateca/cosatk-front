import axios from 'axios'

const useAxiosWithToken = () => {
	const token = localStorage.getItem('token')
	if (!token) {
		const axiosInstance = axios.create({
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return axiosInstance
	}

	const axiosInstance = axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
	return axiosInstance
}

export default useAxiosWithToken
