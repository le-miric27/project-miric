# Google Search Console DNS Verification (Route 53)

## Steps

1. **Get the TXT record from Google Search Console**
   - In Search Console, select "Domain" or look for DNS verification option
   - Copy the TXT record value (looks like: `google-site-verification=XXXXXXXXXXXX`)

2. **Open Route 53**
   - Go to [AWS Route 53 Console](https://console.aws.amazon.com/route53/)
   - Click **Hosted zones**
   - Click on **leo-miric.com**

3. **Create the TXT record**
   - Click **Create record**
   - Configure:
     - **Record name**: `blog` (for blog.leo-miric.com) or leave empty (for root domain)
     - **Record type**: `TXT`
     - **Value**: `"google-site-verification=YOUR_CODE_HERE"` (include the quotes)
     - **TTL**: `300` (5 minutes)
   - Click **Create records**

4. **Verify in Search Console**
   - Wait 5-10 minutes for DNS propagation
   - Go back to Google Search Console
   - Click **Verify**

## Verify DNS Propagation

Check if the record is live:

```bash
dig TXT blog.leo-miric.com
```

Or use [Google's DNS checker](https://toolbox.googleapps.com/apps/dig/#TXT/).

## Notes

- The HTML file method (`static/googleab7bf64cb763c879.html`) is usually sufficient
- DNS verification is an alternative/backup method
- Keep the TXT record permanently for ongoing verification
