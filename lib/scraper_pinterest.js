const cheerio = require('cheerio')
const axios = require('axios')
const { JSDOM } = require('jsdom')
const request = require('request')
const fetch = require('node-fetch')
const fs = require('fs')

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	}) //_auth=1; _b=\"AXkCAiAoYVVHbJdU0vlS+8kQMLNIoVNr+963e9aMYNW/WdnlhTA9c7m+aYY+85NC3zg="\; _pinterest_sess=TWc9PSZrVWhnK0I0bTdVR005Z3hQNVJXTmluVUY1THQvK0NnQ2cybmRuRmd5YndFVDR2MGEzdWwxMy9zZXlkNkE3K3huSXA4T0xmQXYvV1B0aWJ3ZWVobHNtYUtmaTU4TVpBaDBEUlgxeW1ETk9sVy9lUENqSzBNYlBsOE5HajNVUHVVVEhWOFBjOEZoNlVWMzlqM2JqR1dmQjluS0IrRjlkTnFLblp2NEdMaXZkbDFLdmtaNmdNNFhPS2FwVnhwZTBvdUFTcDF1VytKY3kxZzdnRW9reVV4TWJjRUNuVzBaUDI5UE1GOVpFVGprTjh5blFtbXNEcFdCeTRTb3NCRkl1MnR2YStPM1YzZjdlb1V6TmcxcDhiMXpGbVZQMHZ3VEpHNWhNQnI2NnYzWnhhdzVwRzlxRzUvTmJWZEowRjBYYU5UZEtoeE1mOGw3UThydkRMWEVjRzk0Vzc3TFFHbGRvbmZacDI5TWMvbXNOQlhBRDM1TkdnM1l6ZUpEWjcrMzNDS0xQMlFpUWxXTFpBZjMrWXQ4aEYzeW1TZGt0Ly9ZRS9EVldVZUdpNTJtU1NXMHErNmhQbmFLSXhzVTlCUXZ0K1RKeUFhVlBnR0JUWXFMbnF3bmJJY1IwdG9JZXBFckdiTjd1Y1gzSThaZFFwdGJRUmt4RjNOd2dpT0haU1FRMkR1Z0V4R0J2cnpkWFF1K09mMjRybWU3TGVtN2VrUUQ4MjZYOEFXcVo1M2JKbXpFM2lrTTh1eWFNYXNBajNkVmZqTDByaW0raXhmaTBNeDdLYWRPcFF0WFpaRVFxMmNSNjIrd0ZJZ0RYT2xWd3BzU3pkUEhyOVl3aWtuY2owSXdBZGZtTWhkekhkMTFEM2xZZEpLTGtvWVJIVFlEckJsYk9aZjc5QXhJamNYZGVvWnBBNGtQVTI0WDc3YktkWVJMbmcwdGc3aFA2Q0VraXdRUUMvYmh0M1FjalRoSGNibUlGZ1ZHTGkzMGxrUy9WOU5GUFM3YzVtN3dHQWVHV1V5dEhRRUFRL090OTllMzZBWHQ1SU9sVnB0eUpldEhib1JvSjV3alVyM2ZZbjdlb2xzTDhONHBQL1d0ZXYwNkVuWXlMNkk0aXlGdGJJOXVhS3I0aGtYZW5wYkkzWFFXL1R5TC9FdU4xbnAxTXRlOUtlNmlreEtKKzloSDFtN1JJcDRGdDV1NnFRUTVEVzljbVRoakFWMldGNFo3UWhFQklXbCtxSzBRbGxYSW5QSlduMDJRNUwrbzAvcTVqYUIwemVPSklLMmE3d1AvclJLM1hSeXdJSnRNVTdxSlVLdlJPUjhQckFVYVA4MGZ0enhVNnFNa0xocm5WS1BwY3BkSXZ6Q1NudENyTjNrNllSYWE1NnR6ZEorMXV2U0dIVUtpWGxOZzF5aVVwN2FJaC96N2kxUFJqMElHZ0YzVkE5ZXlOQUttbmFVV0ZiNGhqUlFYSCtjbFlsNnhyU2h6SzBCTzBRb1NSQ290aDFaRVdoR05zVFZYZm1sODdMekZMMUYwamFoNEtPMTV3ZFE3NTlBNVc5MG43SERXUGJXQ0dRMXBMcTFKTkVGOG1ySUpBVWdNOEtqVVdqQks4MkFKNWtEWEtKQ0Z5dUQwUm9kZGJrTWJJWC81K0hRazJQU2NBcWNvWTVhN2l2YWp0OWxaSk1BMVJXN0ZNWXIrUFlQemlCMHZXS3JuSW5yK2M1RExGWGNHdHI4TEV0UlduekFub2NGNnF6dG84d2xDZlFTdGR5aHc2bnI5SkkyTERKdFErcXYxdEJjS0FPa2UmRWc2aDZkbkVVUlAvV0x3TnFwcXd6WjZXM1h3PQ==;
}

module.exports = { pinterest }