git log --pretty=oneline | sed 's/[^ ]* *//' > git_logs.txt

while read text_line; do
  if [[ "$text_line" =~ "[🤖 DailyBot] New release to v" ]]; then
    break
  fi
  if [[ ! "$text_line" =~ "Merge branch 'master'" ]]; then
    echo "🚩 $text_line" >> git_logs_output.txt
  fi
done < git_logs.txt
