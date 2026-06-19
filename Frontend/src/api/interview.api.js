import api from './axios.js'

export const createInterviewReport = (formData) =>
  api.post('/interview', formData).then((r) => r.data)

export const getAllInterviewReports = () => api.get('/interview').then((r) => r.data)

export const getInterviewReportById = (id) => api.get(`/interview/report/${id}`).then((r) => r.data)

export const downloadResumePdf = (interviewReportId) =>
  api
    .post(`/interview/resume/pdf/${interviewReportId}`, null, { responseType: 'blob' })
    .then((r) => r.data)
